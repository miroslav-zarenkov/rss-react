import { ChangeEvent, useCallback, useState } from 'react';
import Header from './Header';
import Content from './Content';
import { useNavigate } from 'react-router-dom';

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
      const skip = (parseInt(page, 10) - 1) * parseInt(cardsPerPage, 10);
      const trimmedValue = inputValue.trim();
      const url = inputValue
        ? `https://dummyjson.com/products/search?q=${trimmedValue}&limit=${cardsPerPage}&skip=${skip}`
        : `https://dummyjson.com/products?limit=${cardsPerPage}&skip=${skip}`;
      setIsButtonDisabled(true);
      localStorage.setItem('searchInput', trimmedValue);
      try {
        setInputValue(trimmedValue);
        const response = await fetch(url, {
          method: 'GET',
        });
        const fetchedProducts = await response.json();
        setTotalProducts(fetchedProducts.total);
        setProducts(fetchedProducts.products);
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
        setCardsPerPage={setCardsPerPage}
        cardsPerPage={cardsPerPage}
        totalProducts={totalProducts}
        handleClick={handleClick}
      />
    </>
  );
}

export default MainPage;
