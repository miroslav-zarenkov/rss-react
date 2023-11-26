import { render, screen } from '@testing-library/react';
import ProductCard from '@/components/ProductCard/ProductCard';
import '@testing-library/jest-dom';

describe('ProductCard', () => {
  const mockProduct = {
    id: 1,
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  };

  it('should render product card correctly', () => {
    render(<ProductCard product={mockProduct} onClick={() => {}} />);
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByAltText(mockProduct.title)).toBeInTheDocument();
  });
});
