import { useCallback, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DataContext from '../../context/DataContext';
import fetchData from '../../api/fetchData';
import styles from './SearchButton.module.scss';

function SearchButton() {
  const {
    cardsPerPage,
    isButtonDisabled,
    inputValue,
    setIsButtonDisabled,
    setTotalProducts,
    setProducts,
    currentPage,
    setInputValue,
  } = useContext(DataContext);
  const { pageNumber } = useParams();
  const navigate = useNavigate();
  const handleClick = useCallback(
    async (page: string) => {
      setIsButtonDisabled(true);
      localStorage.setItem('searchInput', inputValue.trim());
      try {
        setInputValue(inputValue.trim());
        const data = await fetchData(page, cardsPerPage, inputValue);
        setTotalProducts(data.total);
        setProducts(data.products);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsButtonDisabled(false);
        navigate(`/page/${page}`);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cardsPerPage, inputValue, navigate]
  );

  const handleKeyPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleClick('1');
    }
  };

  useEffect(() => {
    handleClick(pageNumber ?? '1');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardsPerPage, currentPage]);

  return (
    <button
      className={`${styles.button} ${styles.search}`}
      onClick={() => handleClick('1')}
      disabled={isButtonDisabled}
      onKeyDown={handleKeyPress}
      type="submit"
    >
      {isButtonDisabled ? 'Loading...' : 'Search'}
    </button>
  );
}

export default SearchButton;
