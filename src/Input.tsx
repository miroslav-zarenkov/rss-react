import { ChangeEvent } from 'react';

interface InputProps {
  handleInput: (event: ChangeEvent) => void;
  inputValue: string;
}

function Input({ handleInput, inputValue }: InputProps) {
  return (
    <input
      type="text"
      placeholder="Search Products"
      onChange={handleInput}
      value={inputValue}
    ></input>
  );
}

export default Input;
