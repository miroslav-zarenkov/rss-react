import { useState } from 'react';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import DataContext, { Product } from '../context/DataContext';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ErrorBoundary from '../providers/ErrorBoundary/ErrorBoundary';

function MainPage() {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('searchInput') ?? ''
  );
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [cardsPerPage, setCardsPerPage] = useState(
    localStorage.getItem('cardsPerPage') || '5'
  );
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const contextValues = {
    inputValue,
    isButtonDisabled,
    products,
    cardsPerPage,
    totalProducts,
    currentPage,
    setInputValue,
    setIsButtonDisabled,
    setProducts,
    setCardsPerPage,
    setTotalProducts,
    setCurrentPage,
  };

  return (
    <Provider store={store}>
      <DataContext.Provider value={contextValues}>
        <ErrorBoundary>
          <Header />
          <Content />
        </ErrorBoundary>
      </DataContext.Provider>
    </Provider>
  );
}

export default MainPage;
