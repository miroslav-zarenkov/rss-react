import { render, screen } from '@testing-library/react';
import ErrorButton from '../ErrorButton';

it('should have Error 404', () => {
  render(<ErrorButton />);
  const text = screen.queryByText(/Throw error/i);
  expect(text).toBeVisible();
});
