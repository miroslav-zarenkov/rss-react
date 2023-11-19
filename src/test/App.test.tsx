import { render } from '@testing-library/react';
import App from '../app/App';

it('should render main page when navigating to /page/1', () => {
  const { container } = render(<App />);
  expect(container.querySelector('header')).toBeInTheDocument();
  expect(container.querySelector('main')).toBeInTheDocument();
});
