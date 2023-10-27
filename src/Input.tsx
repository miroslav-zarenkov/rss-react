import { ChangeEvent, Component } from 'react';

interface InputProps {
  handleInput: (event: ChangeEvent) => void;
  inputValue: string;
}

class Input extends Component<InputProps> {
  render() {
    return (
      <input
        type="text"
        placeholder="input"
        onChange={this.props.handleInput}
        value={this.props.inputValue}
      ></input>
    );
  }
}

export default Input;
