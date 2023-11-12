import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import App from '../App';

it('should add data to local storage and update input value', async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter initialEntries={['/page/1']}>
      <App />
    </MemoryRouter>
  );

  const inputElement = screen.getByPlaceholderText(
    'Search Products'
  ) as HTMLInputElement;
  const searchButton = await screen.findByText('Search');
  await user.type(inputElement, 'test');
  await user.click(searchButton);
  await waitFor(() => {
    expect(localStorage.getItem('searchInput')).toBe('test');
  });
  await waitFor(() => {
    expect(inputElement.value).toBe('test');
  });
});

it('should get input value from local storage', async () => {
  render(
    <MemoryRouter initialEntries={['/page/1']}>
      <App />
    </MemoryRouter>
  );

  const inputElement = screen.getByPlaceholderText(
    'Search Products'
  ) as HTMLInputElement;
  await waitFor(() => {
    expect(inputElement.value).toBe('test');
  });
});
