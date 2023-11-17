import { ChangeEvent, useCallback, useState } from 'react';
import Header from './Header';
import Content from './Content';
import { useNavigate } from 'react-router-dom';
import DataContext from './DataContext';
import fetchData from './api/fetchData';

function MainPage() {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('searchInput') ?? ''
  );
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [products, setProducts] = useState(null);
  const [cardsPerPage, setCardsPerPage] = useState(
    localStorage.getItem('cardsPerPage') || '5'
  );
  const [totalProducts, setTotalProducts] = useState(0);
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
    [cardsPerPage, inputValue, navigate]
  );

  const handleInput = (event: ChangeEvent) => {
    const value = (event.target as HTMLInputElement)?.value;
    setInputValue(value);
  };

  const contextValues = {
    inputValue,
    isButtonDisabled,
    products,
    cardsPerPage,
    totalProducts,
    handleInput,
    handleClick,
    setCardsPerPage,
  };

  return (
    <DataContext.Provider value={contextValues}>
      <Header />
      <Content />
    </DataContext.Provider>
  );
}

export default MainPage;
