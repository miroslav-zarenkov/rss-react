import { render, screen, waitFor } from '@testing-library/react';
import ErrorButton from '../ErrorButton';
import userEvent from '@testing-library/user-event';
import ErrorBoundary from '../ErrorBoundary';

it('should render error text', async () => {
  const user = userEvent.setup();
  render(
    <ErrorBoundary>
      <ErrorButton />
    </ErrorBoundary>
  );
  await user.click(screen.getByText('Throw Error'));
  await waitFor(() => {
    const errorMessage = screen.getByText('Something went wrong.');
    expect(errorMessage).toBeVisible();
    const reloadButton = screen.getByText('Reload Page');
    expect(reloadButton).toBeVisible();
  });
});
