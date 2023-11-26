import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '@/components/Header/Header';
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
describe('Header component', () => {
  it('should render header', () => {
    const handleInputChangeMock = jest.fn();
    render(<Header handleInputChange={handleInputChangeMock} />);

    expect(screen.getByText('Dummy Products')).toBeInTheDocument();
    expect(screen.getByTestId('search-element')).toBeInTheDocument();
    expect(screen.getByTestId('error-button')).toBeInTheDocument();
  });
});
