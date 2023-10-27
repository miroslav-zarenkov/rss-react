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
    return (
      <header className="header">
        <Input
          handleInput={this.props.handleInput}
          inputValue={this.props.inputValue}
        />
        <Button
          handleClick={this.props.handleClick}
          isButtonDisabled={this.props.isButtonDisabled}
        />
      </header>
    );
  }
}

export default Header;
