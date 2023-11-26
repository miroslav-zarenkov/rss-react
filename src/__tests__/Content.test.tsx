import React from 'react';
import { render, screen } from '@testing-library/react';
import Content from '@/components/Content/Content';
import '@testing-library/jest-dom';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
const pushMock = jest.fn();
(useRouter as jest.Mock).mockReturnValue({
  query: {},
  push: pushMock,
});

const mockProducts = [
  {
    title: 'Product 1',
    thumbnail: '/thumbnail1.jpg',
    description: 'Description 1',
    id: 1,
  },
  {
    title: 'Product 2',
    thumbnail: '/thumbnail2.jpg',
    description: 'Description 2',
    id: 2,
  },
];

const mockProps = {
  products: mockProducts,
  totalPages: 2,
  currentPage: 1,
  onPageChange: jest.fn(),
  handlePerPageChange: jest.fn(),
  handleDetailsChange: jest.fn(),
};

describe('Content component', () => {
  it('should render Content component with products', () => {
    render(<Content {...mockProps} />);
    expect(screen.getByTestId('content-wrapper')).toBeInTheDocument();
    expect(screen.getAllByTestId('product-card')).toHaveLength(2);
    expect(screen.getByTestId('paginator')).toBeInTheDocument();
  });

  it('should display "Not Found" message when there are no products', () => {
    render(
      <Content
        products={[]}
        totalPages={0}
        currentPage={1}
        onPageChange={jest.fn()}
        handlePerPageChange={jest.fn()}
        handleDetailsChange={jest.fn()}
      />
    );
    expect(screen.getByText('Not Found')).toBeInTheDocument();
    expect(screen.getByText('There is no spoon')).toBeInTheDocument();
  });
});
