import { render, screen } from '@testing-library/react';
import Error404 from '../Error404';

it('should have Error 404', () => {
  render(<Error404 />);
  const text = screen.queryByText(/Error 404/i);
  expect(text).toBeVisible();
});
