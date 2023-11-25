import { useState } from 'react';
import styles from './SearchElement.module.css';
import { useRouter } from 'next/router';

type SearchElementProps = {
  handleInputChange: (value: string) => void;
};

const SearchElement = ({ handleInputChange }: SearchElementProps) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(
    router.query.inputValue as string
  );
  const handleClick = () => {
    handleInputChange(searchValue);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
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
        className={styles['search-input']}
        value={searchValue}
        onChange={handleChange}
        onKeyDown={(event) => handleKeyPress(event)}
      />
      <button
        className={`${styles.button} ${styles.search}`}
        type="button"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
};

export default SearchElement;
