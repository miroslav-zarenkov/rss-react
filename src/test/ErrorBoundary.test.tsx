import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../ErrorBoundary';

const ErrorComponent = () => {
  throw new Error('Test error');
};

it('should render error message', () => {
  render(
    <ErrorBoundary>
      <ErrorComponent />
    </ErrorBoundary>
  );
  const errorMessage = screen.getByText('Something went wrong.');
  expect(errorMessage).toBeVisible();
  const reloadButton = screen.getByText('Reload Page');
  expect(reloadButton).toBeVisible();
});

it('should render children without error', () => {
  render(
    <ErrorBoundary>
      <div>No error</div>
    </ErrorBoundary>
  );
  const normalContent = screen.getByText('No error');
  expect(normalContent).toBeVisible();
});
