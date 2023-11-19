import { ChangeEvent, useState } from 'react';
import styles from './SearchElement.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../redux/searchSlice';
import { setCurrentPage } from '../../redux/currentPageSlice';

const SearchElement = () => {
  const [inputValue, setInputData] = useState('');

  const handleInputChange = (event: ChangeEvent) => {
    setInputData((event.target as HTMLInputElement).value);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const value = inputValue.trim();
  const handleClick = (page = '1') => {
    localStorage.setItem('searchInput', value);
    dispatch(setSearch(value));
    dispatch(setCurrentPage(page));
    navigate(`/page/${page}`);
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleClick();
    }
  };
  return (
    <div className={styles['search-form']}>
      <input
        type="text"
        placeholder="Search Products"
        value={inputValue}
        onChange={handleInputChange}
        className={styles['search-input']}
        onKeyDown={(event) => handleKeyPress(event)}
      />
      <button
        className={`${styles.button} ${styles.search}`}
        onClick={() => handleClick()}
        type="button"
      >
        Search
      </button>
    </div>
  );
};

export default SearchElement;
