import { ChangeEvent, Component } from 'react';
import Header from './Header';
import Content from './Content';

class App extends Component {
  state = {
    inputValue: localStorage.getItem('searchInput') ?? '',
    isButtonDisabled: false,
    beers: null,
  };

  componentDidMount() {
    const storedBeers = localStorage.getItem('beersData');
    if (storedBeers) {
      this.setState({ beers: JSON.parse(storedBeers) });
    } else {
      this.handleClick();
    }
  }

  handleClick = async () => {
    const trimmedValue = this.state.inputValue.trim();
    const url = this.state.inputValue
      ? `https://api.punkapi.com/v2/beers?beer_name=${trimmedValue}`
      : 'https://api.punkapi.com/v2/beers';
    this.setState({ isButtonDisabled: true });
    localStorage.setItem('searchInput', trimmedValue);
    try {
      this.setState({ inputValue: trimmedValue });
      const response = await fetch(url, {
        method: 'GET',
      });
      const beers = await response.json();
      this.setState({ beers: beers });
      localStorage.setItem('beersData', JSON.stringify(beers));
    } catch (error) {
      console.error('Error:', error);
    } finally {
      this.setState({ isButtonDisabled: false });
    }
  };

  handleInput = (event: ChangeEvent) => {
    const value = (event.target as HTMLInputElement)?.value;
    this.setState({ inputValue: value });
  };

  render() {
    return (
      <>
        <Header
          handleClick={this.handleClick}
          handleInput={this.handleInput}
          isButtonDisabled={this.state.isButtonDisabled}
          inputValue={this.state.inputValue}
        />
        <Content
          beers={this.state.beers}
          isButtonDisabled={this.state.isButtonDisabled}
        />
      </>
    );
  }
}

export default App;
