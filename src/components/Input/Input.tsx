import { ChangeEvent } from 'react';
import styles from './Input.module.scss';
import { setSearch } from '../../redux/searchSlice';
import { useAppDispatch, useAppSelector } from '../../redux/redux';

function Input() {
  const dispatch = useAppDispatch();
  const { searchTerm } = useAppSelector((state) => state.search);
  const handleInput = (event: ChangeEvent) => {
    const value = (event.target as HTMLInputElement)?.value;
    dispatch(setSearch(value));
    console.log(searchTerm);
  };
  return (
    <input
      type="text"
      placeholder="Search Products"
      onChange={handleInput}
      value={searchTerm}
      className={styles['search-input']}
    ></input>
  );
}

export default Input;
