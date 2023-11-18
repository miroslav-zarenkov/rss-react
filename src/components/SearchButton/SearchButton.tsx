import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DataContext from '../../context/DataContext';
import fetchData from '../../api/fetchData';
import styles from './SearchButton.module.scss';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../redux/searchSlice';
import { useAppSelector } from '../../redux/redux';

function SearchButton() {
  const {
    isButtonDisabled,
    setIsButtonDisabled,
    setTotalProducts,
    setProducts,
    currentPage,
    setCurrentPage,
  } = useContext(DataContext);
  const dispatch = useDispatch();
  const { searchTerm } = useAppSelector((state) => state.search);
  const { cardsPerPage } = useAppSelector((state) => state.cardsPerPage);
  const { pageNumber } = useParams();
  const navigate = useNavigate();
  const handleClick = async (page: string) => {
    setIsButtonDisabled(true);
    const value = searchTerm.trim();
    try {
      dispatch(setSearch(value));
      localStorage.setItem('searchInput', value);
      const data = await fetchData(page, cardsPerPage, value);
      setTotalProducts(data.total);
      setProducts(data.products);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsButtonDisabled(false);
      setCurrentPage(parseInt(page, 10));
      navigate(`/page/${page}`);
    }
  };

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
