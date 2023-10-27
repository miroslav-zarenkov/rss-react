import { ChangeEvent, Component } from 'react';
import Header from './Header';
import Content from './Content';

class App extends Component {
  state = {
    inputValue: localStorage.getItem('searchInput') ?? '',
    isButtonDisabled: false,
    planets: null,
  };

  componentDidMount() {
    this.handleClick();
  }

  handleClick = async () => {
    const url = this.state.inputValue
      ? `https://swapi.dev/api/planets/?search=${this.state.inputValue}`
      : 'https://swapi.dev/api/planets/';
    this.setState({ isButtonDisabled: true });
    localStorage.setItem('searchInput', this.state.inputValue);
    console.log(localStorage);
    try {
      const response = await fetch(url, {
        method: 'GET',
      });
      const planets = await response.json();
      this.setState({ planets: planets.results });
      console.log(planets.results);
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
        <Content planets={this.state.planets} />
      </>
    );
  }
}

export default App;
