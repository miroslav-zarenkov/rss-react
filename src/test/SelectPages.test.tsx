import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SelectPages from '../components/SelectPages/SelectPages';
import DataContext from '../context/DataContext';

const mockContext = {
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
