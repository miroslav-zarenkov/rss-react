import { ChangeEvent, Component } from 'react';
import Button from './Button';
import Input from './Input';

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
        <Input handleInput={handleInput} inputValue={inputValue} />
        <Button handleClick={handleClick} isButtonDisabled={isButtonDisabled} />
      </header>
    );
  }
}

export default Header;
