import { render, fireEvent, waitFor } from '@testing-library/react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorButton from '@/components/ErrorButton/ErrorButton';
import '@testing-library/jest-dom';

const ErrorFallback = ({ error }: { error: Error }) => (
  <div>
    <h2>Something went wrong.</h2>
    <p>{error.message}</p>
  </div>
);

describe('ErrorButton', () => {
  it(' should render button', () => {
    const { getByText } = render(
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ErrorButton />
      </ErrorBoundary>
    );
    expect(getByText('Throw Error')).toBeInTheDocument();
  });

  it('should throw an error when the button is clicked', async () => {
    const { getByText } = render(
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ErrorButton />
      </ErrorBoundary>
    );
    fireEvent.click(getByText('Throw Error'));
    await waitFor(() => {
      expect(getByText('Something went wrong.')).toBeInTheDocument();
      expect(getByText('I crashed!')).toBeInTheDocument();
    });
  });
});
