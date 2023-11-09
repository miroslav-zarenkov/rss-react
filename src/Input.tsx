import { useContext } from 'react';
import DataContext from './DataContext';

function Input() {
  const { handleInput, inputValue } = useContext(DataContext);
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
