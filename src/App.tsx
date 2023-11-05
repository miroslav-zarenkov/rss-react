import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import Header from './Header';
import Content from './Content';

function App() {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('searchInput') ?? ''
  );
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [beers, setBeers] = useState(null);
  const [cardsPerPage, setCardsPerPage] = useState('5');

  const handleClick = useCallback(async () => {
    const trimmedValue = inputValue.trim();
    const url = inputValue
      ? `https://api.punkapi.com/v2/beers?beer_name=${trimmedValue}&per_page=${cardsPerPage}`
      : `https://api.punkapi.com/v2/beers?per_page=${cardsPerPage}`;
    setIsButtonDisabled(true);
    localStorage.setItem('searchInput', trimmedValue);
    try {
      setInputValue(trimmedValue);
      const response = await fetch(url, {
        method: 'GET',
      });
      const beers = await response.json();
      setBeers(beers);
      localStorage.setItem('beersData', JSON.stringify(beers));
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
    const storedBeers = localStorage.getItem('beersData');
    if (storedBeers) {
      setBeers(JSON.parse(storedBeers));
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
        beers={beers}
        isButtonDisabled={isButtonDisabled}
        handleCardsPerPageChange={handleCardsPerPageChange}
        cardsPerPage={cardsPerPage}
      />
    </>
  );
}

export default App;
