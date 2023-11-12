import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';
import DataContext from '../DataContext';
import Header from '../Header';
import Content from '../Content';

it('should render details with the right info when clicking on card ', async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter initialEntries={['/page/1']}>
      <App />
    </MemoryRouter>
  );
  const card = await screen.findByText('iPhone 9');
  const anchorElement = card.closest('a');

  if (anchorElement) {
    await user.click(anchorElement);
  }
  waitFor(async () => {
    const details = await screen.findByText('Detailed Card');
    const title = await screen.findByText('iPhone 9');
    const description = await screen.findByText(
      'An apple mobile which is nothing like apple'
    );
    expect(details).toBeVisible;
    expect(title).toBeVisible;
    expect(description).toBeVisible;
    expect((screen.getByRole('img') as HTMLImageElement).src).toBe(
      'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
    );
  });
});

it('should close details when clicking on button', async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter initialEntries={['/page/1']}>
      <App />
    </MemoryRouter>
  );
  const card = await screen.findByText('iPhone 9');
  const anchorElement = card.closest('a');

  if (anchorElement) {
    await user.click(anchorElement);
  }
  waitFor(async () => {
    const closeButtonParent = (await screen.findByText('Close')).parentElement;
    expect(closeButtonParent).toBeNull();
  });
});

it('should display loading indicator while fetching data', async () => {
  const mockContext = {
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
    isButtonDisabled: true,
    setCardsPerPage: () => {},
    cardsPerPage: '1',
    totalProducts: 2,
    handleClick: () => {},
    inputValue: '',
    handleInput: () => {},
  };
  const { container } = render(
    <MemoryRouter>
      <DataContext.Provider value={mockContext}>
        <Header />
        <Content />
      </DataContext.Provider>
    </MemoryRouter>
  );

  expect(container.getElementsByClassName('loader')[0]).toBeVisible;
});
