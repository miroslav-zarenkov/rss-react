import { render, screen } from '@testing-library/react';
import ErrorBoundary from '@/providers/ErrorBoundary/ErrorBoundary';
import '@testing-library/jest-dom';

const ErrorComponent = () => {
  throw new Error('Test error');
};

it('should render error message', () => {
  render(
    <ErrorBoundary>
      <ErrorComponent />
    </ErrorBoundary>
  );
  expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
  expect(screen.getByText('Reload Page')).toBeInTheDocument();
});

it('should render children without error', () => {
  render(
    <ErrorBoundary>
      <div>No error</div>
    </ErrorBoundary>
  );
  expect(screen.getByText('No error')).toBeInTheDocument();
});
