import { render, screen } from '@testing-library/react';
import Layout from '@/components/Layout/Layout';
import '@testing-library/jest-dom';

describe('Layout component', () => {
  it('should render Layout component with children', () => {
    const mockChildren = <div>Mock Children</div>;
    render(<Layout>{mockChildren}</Layout>);
    expect(screen.getByText('Mock Children')).toBeInTheDocument();
  });
});
