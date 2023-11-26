import { render, fireEvent, screen } from '@testing-library/react';
import Details from '@/components/Details/Details';
import '@testing-library/jest-dom';

const mockProduct = {
  id: 1,
  title: 'iPhone 9',
  description: 'An apple mobile which is nothing like apple',
  thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
};

describe('Details component', () => {
  it('should render product details correctly', () => {
    render(<Details product={mockProduct} onClose={() => {}} />);
    expect(screen.getByText('Close')).toBeInTheDocument();
    expect(screen.getByAltText('iPhone 9')).toBeInTheDocument();
    expect(screen.getByText('iPhone 9')).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
  });

  it('should call onClose when Close button is clicked', () => {
    const onCloseMock = jest.fn();
    render(<Details product={mockProduct} onClose={onCloseMock} />);
    const closeButton = screen.getByText('Close');
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalled();
  });
});
