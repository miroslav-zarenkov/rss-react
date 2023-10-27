import { Component } from 'react';

interface ButtonProps {
  handleClick: () => void;
  isButtonDisabled: boolean;
}

class Button extends Component<ButtonProps> {
  render() {
    return (
      <button
        onClick={this.props.handleClick}
        disabled={this.props.isButtonDisabled}
      >
        {this.props.isButtonDisabled ? 'Searching...' : 'Search'}
      </button>
    );
  }
}

export default Button;
