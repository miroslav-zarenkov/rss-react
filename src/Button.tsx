import { Component } from 'react';

interface ButtonProps {
  handleClick: () => void;
  isButtonDisabled: boolean;
}

class Button extends Component<ButtonProps> {
  render() {
    const { handleClick, isButtonDisabled } = this.props;
    return (
      <button onClick={handleClick} disabled={isButtonDisabled}>
        {isButtonDisabled ? 'Searching...' : 'Search'}
      </button>
    );
  }
}

export default Button;
