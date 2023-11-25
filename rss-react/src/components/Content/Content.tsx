import styles from './Content.module.css';
import SelectPages from '../SelectPages/SelectPages';
import ProductCard from '../ProductCard/ProductCard';
import Paginator from '../Paginator/Paginator';

type Product = {
  title: string;
  thumbnail: string;
  description: string;
  id: number;
};

type ProductProps = {
  products: Product[];
  totalPages: number;
  currentPage: number;
  onPageChange: (newPage: number) => void;
};

export default function Content({
  products,
  totalPages,
  currentPage,
  onPageChange,
}: ProductProps) {
  console.log(products);
  if (products && products.length > 0) {
    return (
      <main className={styles.main}>
        <SelectPages />
        <div className={styles['content-wrapper']}>
          <div className={styles.products}>
            <div className={styles['products-data']}>
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
        <Paginator
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </main>
    );
  }
  return (
    <main className={styles.main}>
      <h2>Not Found</h2>
      <div>There is no spoon</div>
    </main>
  );
}
