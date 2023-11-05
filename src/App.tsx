import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import Header from './Header';
import Content from './Content';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';

function App() {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('searchInput') ?? ''
  );
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [products, setProducts] = useState(null);
  const [cardsPerPage, setCardsPerPage] = useState('5');
  const [totalProducts, setTotalProducts] = useState(0);
  const { pageNumber } = useParams();
  console.log(pageNumber);

  const navigate = useNavigate();

  const handleClick = useCallback(
    async (page: string) => {
      console.log(page);
      const skip = (parseInt(page, 10) - 1) * parseInt(cardsPerPage, 10);
      console.log(skip);
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
        localStorage.setItem(
          'productsData',
          JSON.stringify(fetchedProducts.products)
        );
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsButtonDisabled(false);
        navigate(`/page/${page}`);
      }
    },
    [cardsPerPage, inputValue, navigate]
  );
  const handleCardsPerPageChange = (newCardsPerPage: string): void => {
    setCardsPerPage(newCardsPerPage);
  };

  useEffect(() => {
    if (pageNumber) {
      handleClick(pageNumber);
    } else {
      handleClick('1');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardsPerPage, pageNumber]);

  const handleInput = (event: ChangeEvent) => {
    const value = (event.target as HTMLInputElement)?.value;
    setInputValue(value);
  };

  // useEffect(() => {
  //   const storedProducts = localStorage.getItem('productsData');
  //   if (storedProducts) {
  //     setProducts(JSON.parse(storedProducts));
  //   } else {
  //     handleClick(1);
  //   }
  // }, [handleClick]);

  return (
    <>
      <Header
        handleClick={handleClick}
        handleInput={handleInput}
        isButtonDisabled={isButtonDisabled}
        inputValue={inputValue}
      />
      <Routes>
        <Route path="page">
          <Route
            path=":pageNumber"
            element={
              <Content
                products={products}
                isButtonDisabled={isButtonDisabled}
                handleCardsPerPageChange={handleCardsPerPageChange}
                cardsPerPage={cardsPerPage}
                totalProducts={totalProducts}
                handleClick={handleClick}
              />
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
