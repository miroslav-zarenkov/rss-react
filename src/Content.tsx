import ProductCard from './ProductCard';
import Paginator from './Paginator';
import SelectPages from './SelectPages';

interface ContentProps {
  products: Array<{
    title: string;
    thumbnail: string;
    description: string;
  }> | null;
  isButtonDisabled: boolean;
  handleCardsPerPageChange: (string: string) => void;
  cardsPerPage: string;
  totalProducts: number;
}

function Content({
  products,
  isButtonDisabled,
  handleCardsPerPageChange,
  cardsPerPage,
  totalProducts,
}: ContentProps) {
  if (isButtonDisabled) {
    return (
      <main className="main">
        <div>Searching...</div>
      </main>
    );
  }
  if (products && products.length > 0) {
    return (
      <main className="main">
        <SelectPages handleCardsPerPageChange={handleCardsPerPageChange} />
        <div className="products-data">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        <Paginator cardsPerPage={cardsPerPage} totalProducts={totalProducts} />
      </main>
    );
  }
  return (
    <main className="main">
      <h2>Not Found</h2>
      <div>There is no spoon</div>
    </main>
  );
}

export default Content;
