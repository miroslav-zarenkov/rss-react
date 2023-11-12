import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

it('should render main page when navigating to /page/1', () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/page/1']}>
      <App />
    </MemoryRouter>
  );
  expect(container.getElementsByClassName('header').length).toBe(1);
  expect(container.getElementsByClassName('main').length).toBe(1);
});
