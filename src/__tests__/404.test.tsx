import { render, screen } from '@testing-library/react';
import Custom404 from '@/pages/404';
import '@testing-library/jest-dom';

describe('Custom404', () => {
  it('should render 404 message and link', () => {
    render(<Custom404 />);
    expect(screen.getByText('404 - Page Not Found')).toBeInTheDocument();
    expect(screen.getByText('Go back to the homepage.')).toBeInTheDocument();
  });
});
