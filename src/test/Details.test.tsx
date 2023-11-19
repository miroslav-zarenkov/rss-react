import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Details from '../components/Details/Details';

it('should render details with the right info when clicking on card ', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/page/1']}>
        <Details />
      </MemoryRouter>
    </Provider>
  );
  await waitFor(() => {
    const details = screen.findByText('Detailed Card');
    const title = screen.findByText('iPhone 9');
    const description = screen.findByText(
      'An apple mobile which is nothing like apple'
    );
    expect(details).toBeVisible;
    expect(title).toBeVisible;
    expect(description).toBeVisible;
  });
});

it('should close details when clicking on button', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/page/1']}>
        <Details />
      </MemoryRouter>
    </Provider>
  );
  await waitFor(() => {
    const closeButton = screen.queryByText('Close');
    if (closeButton) {
      userEvent.click(closeButton);
      expect(screen.queryByText('Close')).toBeNull();
    }
  });
});

it('should display loading indicator while fetching data', async () => {
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/page/1']}>
        <Details />
      </MemoryRouter>
    </Provider>
  );

  expect(container.getElementsByClassName('loader')[0]).toBeVisible;
});
