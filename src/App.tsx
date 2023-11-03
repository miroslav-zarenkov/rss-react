import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import Header from './Header';
import Content from './Content';

function App() {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('searchInput') ?? ''
  );
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [beers, setBeers] = useState(null);

  const handleClick = useCallback(async () => {
    const trimmedValue = inputValue.trim();
    const url = inputValue
      ? `https://api.punkapi.com/v2/beers?beer_name=${trimmedValue}`
      : 'https://api.punkapi.com/v2/beers';
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
  }, [inputValue]);

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
      <Content beers={beers} isButtonDisabled={isButtonDisabled} />
    </>
  );
}

export default App;
