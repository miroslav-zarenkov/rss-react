import { render, screen, waitFor } from '@testing-library/react';
import Content from '../components/Content/Content';
import DataContext from '../context/DataContext';
import { MemoryRouter } from 'react-router';
import Header from '../components/Header/Header';
import MainPage from '../pages/MainPage';

const mockContextOne = {
  inputValue: '',
  isButtonDisabled: false,
  products: null,
  cardsPerPage: '',
  totalProducts: 0,
  currentPage: 1,
  setInputValue: () => {},
  setIsButtonDisabled: () => {},
  setProducts: () => {},
  setCardsPerPage: () => {},
  setTotalProducts: () => {},
  setCurrentPage: () => {},
};

const mockContextTwo = {
  inputValue: '',
  isButtonDisabled: false,
  products: [
    {
      id: 1,
      title: 'Product 1',
      thumbnail: 'thumbnail1.jpg',
      description: 'Description 1',
    },
    {
      id: 2,
      title: 'Product 2',
      thumbnail: 'thumbnail2.jpg',
      description: 'Description 2',
    },
  ],
  cardsPerPage: '1',
  totalProducts: 2,
  currentPage: 1,
  setInputValue: () => {},
  setIsButtonDisabled: () => {},
  setProducts: () => {},
  setCardsPerPage: () => {},
  setTotalProducts: () => {},
  setCurrentPage: () => {},
};

it('should render no cards and displays not found message', async () => {
  const { container } = render(
    <MemoryRouter>
      <DataContext.Provider value={mockContextOne}>
        <Header />
        <Content />
      </DataContext.Provider>
    </MemoryRouter>
  );

  const notFoundMessage = await screen.findByText(/Not Found/i);
  expect(notFoundMessage).toBeVisible;

  const noSpoonMessage = await screen.findByText(/There is no spoon/i);
  expect(noSpoonMessage).toBeVisible;

  const paginator = container.getElementsByClassName('paginator');
  expect(paginator).toHaveLength(0);
  const productCards = container.getElementsByClassName('product-card');
  expect(productCards).toHaveLength(0);
});

it('should render specified number of cards', () => {
  localStorage.setItem('cardsPerPage', '10');
  const { container } = render(
    <MemoryRouter>
      <DataContext.Provider value={mockContextTwo}>
        <MainPage />
      </DataContext.Provider>
    </MemoryRouter>
  );
  waitFor(async () => {
    const productCards = container.getElementsByClassName('product-card');
    expect(productCards).toHaveLength(10);
  });
});
