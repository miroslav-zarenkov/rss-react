import { render, screen, waitFor } from '@testing-library/react';
import ProductCard from '../components/ProductCard/ProductCard';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

const mockProduct = {
  title: 'Test Product',
  thumbnail: 'test_thumbnail_url',
  description: 'Test description',
  id: 123,
};

it('should render relevant card data', () => {
  render(
    <MemoryRouter>
      <ProductCard product={mockProduct} />
    </MemoryRouter>
  );

  expect(screen.getByText(mockProduct.title)).toBeVisible();
  expect(screen.getByText(mockProduct.description)).toBeVisible();
  expect((screen.getByRole('img') as HTMLImageElement).src).toBe(
    window.location.origin + '/' + mockProduct.thumbnail
  );
});

it('should open details when clicked', async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter>
      <ProductCard product={mockProduct} />
    </MemoryRouter>
  );

  const title = await screen.findByText(mockProduct.title);
  const card = title?.closest('a');
  if (card) {
    console.log(card);
    await user.click(card);
  }
  waitFor(async () => {
    const details = await screen.findByText('Detailed Card');
    expect(details).toBeVisible;
  });
});
