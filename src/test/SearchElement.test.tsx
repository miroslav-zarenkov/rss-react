import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import SearchElement from '../components/SearchElement/SearchElement';
import store from '../redux/store';

it('should render SearchElement', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SearchElement />
      </BrowserRouter>
    </Provider>
  );

  expect(screen.getByPlaceholderText('Search Products')).toBeInTheDocument();
  expect(screen.getByText('Search')).toBeInTheDocument();
});
