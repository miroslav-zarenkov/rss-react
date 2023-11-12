import { render, screen, waitFor } from '@testing-library/react';
import Content from '../Content';
import DataContext from '../DataContext';
import { MemoryRouter } from 'react-router';
import Header from '../Header';
import MainPage from '../MainPage';

const mockContextOne = {
  products: [],
  isButtonDisabled: false,
  setCardsPerPage: () => {},
  cardsPerPage: '',
  totalProducts: 0,
  handleClick: () => {},
  inputValue: '',
  handleInput: () => {},
};

const mockContextTwo = {
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
  isButtonDisabled: false,
  setCardsPerPage: () => {},
  cardsPerPage: '1',
  totalProducts: 2,
  handleClick: () => {},
  inputValue: '',
  handleInput: () => {},
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
