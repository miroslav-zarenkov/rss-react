import { Component, ReactNode } from 'react';

interface ErrorButtonProps {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorButton extends Component<ErrorButtonProps, State> {
  constructor(props: ErrorButtonProps) {
    super(props);
    this.state = { hasError: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      throw new Error('I crashed!');
    }
    return <button onClick={this.handleClick}>Throw Error</button>;
  }
}

export default ErrorButton;
