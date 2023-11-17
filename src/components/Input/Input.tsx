import { ChangeEvent, useContext } from 'react';
import DataContext from '../../context/DataContext';
import styles from './Input.module.scss';

function Input() {
  const { setInputValue, inputValue } = useContext(DataContext);
  const handleInput = (event: ChangeEvent) => {
    const value = (event.target as HTMLInputElement)?.value;
    setInputValue(value);
  };
  return (
    <input
      type="text"
      placeholder="Search Products"
      onChange={handleInput}
      value={inputValue}
      className={styles['search-input']}
    ></input>
  );
}

export default Input;
