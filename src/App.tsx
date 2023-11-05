import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import Header from './Header';
import Content from './Content';

function App() {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('searchInput') ?? ''
  );
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [products, setProducts] = useState(null);
  const [cardsPerPage, setCardsPerPage] = useState('5');

  const handleClick = useCallback(async () => {
    const trimmedValue = inputValue.trim();
    const url = inputValue
      ? `https://dummyjson.com/products/search?q=${trimmedValue}&limit=${cardsPerPage}`
      : `https://dummyjson.com/products?limit=${cardsPerPage}`;
    setIsButtonDisabled(true);
    localStorage.setItem('searchInput', trimmedValue);
    try {
      setInputValue(trimmedValue);
      const response = await fetch(url, {
        method: 'GET',
      });
      const fetchedProducts = await response.json();
      console.log(fetchedProducts.products);
      setProducts(fetchedProducts.products);
      localStorage.setItem(
        'productsData',
        JSON.stringify(fetchedProducts.products)
      );
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsButtonDisabled(false);
    }
  }, [cardsPerPage, inputValue]);

  const handleCardsPerPageChange = (newCardsPerPage: string): void => {
    setCardsPerPage(newCardsPerPage);
  };

  useEffect(() => {
    handleClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardsPerPage]);

  const handleInput = (event: ChangeEvent) => {
    const value = (event.target as HTMLInputElement)?.value;
    setInputValue(value);
  };

  useEffect(() => {
    const storedProducts = localStorage.getItem('productsData');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      handleClick();
    }
  }, [handleClick]);

  return (
    <>
      <Header
        handleClick={handleClick}
        handleInput={handleInput}
        isButtonDisabled={isButtonDisabled}
        inputValue={inputValue}
      />
      <Content
        products={products}
        isButtonDisabled={isButtonDisabled}
        handleCardsPerPageChange={handleCardsPerPageChange}
        cardsPerPage={cardsPerPage}
      />
    </>
  );
}

export default App;
