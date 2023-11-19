import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
import SelectPages from '../components/SelectPages/SelectPages';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { MemoryRouter } from 'react-router-dom';

it('should renders SelectPages and update cardsPerPage', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/page/1']}>
        <SelectPages />
      </MemoryRouter>
    </Provider>
  );

  const selectElement = screen.getByLabelText(
    'Products per page:'
  ) as HTMLSelectElement;
  expect(selectElement).toBeVisible();
  expect(selectElement.value).toBe('5');

  await act(async () => {
    fireEvent.change(selectElement, { target: { value: '10' } });
    await waitFor(() => {
      expect(localStorage.getItem('cardsPerPage')).toBe('10');
    });
  });

  await waitFor(() => {
    expect(selectElement.value).toBe('10');
  });
});
