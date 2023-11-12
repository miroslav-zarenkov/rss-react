import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import MainPage from '../MainPage';

const setupMyTest = () => {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: <>Navigated from Start</>,
      },
      {
        path: '/page/1',
        element: <MainPage />,
      },
    ],
    {
      initialEntries: ['/page/1'],
      initialIndex: 0,
    }
  );

  render(<RouterProvider router={router} />);
  return { router };
};

test('updates URL query parameter when page changes', async () => {
  const { router } = setupMyTest();
  const user = userEvent.setup();
  expect(router.state.location.pathname).toEqual('/page/1');
  const pageButton = await screen.findByText('Page 2');
  await user.click(pageButton);
  await waitFor(() => {
    expect(router.state.location.pathname).toBe('/page/2');
  });
});
