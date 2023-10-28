import { ChangeEvent, Component } from 'react';
import SearchButton from './SearchButton';
import Input from './Input';
import ErrorButton from './ErrorButton';

interface HeaderProps {
  handleInput: (event: ChangeEvent) => void;
  inputValue: string;
  handleClick: () => void;
  isButtonDisabled: boolean;
}

class Header extends Component<HeaderProps> {
  render() {
    const { handleInput, inputValue, handleClick, isButtonDisabled } =
      this.props;
    return (
      <header className="header">
        <h1>Star Wars Planets</h1>
        <Input handleInput={handleInput} inputValue={inputValue} />
        <SearchButton
          handleClick={handleClick}
          isButtonDisabled={isButtonDisabled}
        />
        <ErrorButton />
      </header>
    );
  }
}

export default Header;
