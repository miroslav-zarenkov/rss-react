import { ChangeEvent, Component } from 'react';

interface InputProps {
  handleInput: (event: ChangeEvent) => void;
  inputValue: string;
}

class Input extends Component<InputProps> {
  render() {
    const { handleInput, inputValue } = this.props;
    return (
      <input
        type="text"
        placeholder="Search Planet"
        onChange={handleInput}
        value={inputValue}
      ></input>
    );
  }
}

export default Input;
