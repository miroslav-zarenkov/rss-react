import { render, waitFor } from '@testing-library/react';
import Content from '../components/Content/Content';
import { MemoryRouter } from 'react-router';
import MainPage from '../pages/MainPage';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { BrowserRouter } from 'react-router-dom';

it('should render loading spinner when data is loading', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </Provider>
  );
  expect(container.querySelector('[class*="loader"]')).toBeInTheDocument();
});

it('should render specified number of cards', async () => {
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/page/1']}>
        <MainPage />
      </MemoryRouter>
    </Provider>
  );
  await waitFor(() => {
    const productCards = container.querySelectorAll('[class*="product-card"]');
    expect(productCards).toHaveLength(5);
  });
});
