import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from '@/components/ProductCard/ProductCard';
import '@testing-library/jest-dom';

describe('ProductCard', () => {
  const mockProduct = {
    title: 'Mock Product',
    thumbnail: '/mock_image_url.jpg',
    description: 'This is a mock product',
    id: 1,
  };

  test('renders product card correctly', () => {
    render(<ProductCard product={mockProduct} onClick={() => {}} />);
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByAltText(mockProduct.title)).toBeInTheDocument();
  });
});
