import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SelectPages from '../SelectPages';
import DataContext from '../DataContext';

const mockContext = {
  products: [],
  isButtonDisabled: false,
  setCardsPerPage: () => {},
  cardsPerPage: '',
  totalProducts: 0,
  handleClick: () => {},
  inputValue: '',
  handleInput: () => {},
};

it('should renders SelectPages and update cardsPerPage', async () => {
  render(
    <DataContext.Provider value={mockContext}>
      <SelectPages />
    </DataContext.Provider>
  );

  const selectElement = screen.getByLabelText(
    'Products per page:'
  ) as HTMLSelectElement;
  expect(selectElement).toBeVisible();
  expect(selectElement.value).toBe('5');

  fireEvent.change(selectElement, { target: { value: '10' } });

  await waitFor(() => {
    expect(localStorage.getItem('cardsPerPage')).toBe('10');
  });

  expect(selectElement.value).toBe('10');
});
