import styles from './Content.module.css';
import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Details from '../Details/Details';
import Layout from '../Layout/Layout';
import SelectPages from '../SelectPages/SelectPages';
import Paginator from '../Paginator/Paginator';
import { useRouter } from 'next/router';

type Product = {
  title: string;
  thumbnail: string;
  description: string;
  id: number;
};

type ContentProps = {
  products: Product[];
  totalPages: number;
  currentPage: number;
  onPageChange: (newPage: number) => void;
  handlePerPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleDetailsChange: (id: string) => void;
};

function Content({
  products,
  totalPages,
  currentPage,
  onPageChange,
  handlePerPageChange,
  handleDetailsChange,
}: ContentProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const router = useRouter();

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
    handleDetailsChange(product.id.toString());
  };

  const handleCardClose = () => {
    setSelectedProduct(null);
    handleDetailsChange('');
  };

  const { details } = router.query;
  const selectedProductById = details
    ? products.find((product) => product.id.toString() === details)
    : null;
  if (products.length > 0) {
    return (
      <Layout
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
        handlePerPageChange={handlePerPageChange}
      >
        <SelectPages handlePerPageChange={handlePerPageChange} />
        <div
          className={styles['content-wrapper']}
          data-testid="content-wrapper"
        >
          <div className={styles.products}>
            <div className={styles['products-data']}>
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  onClick={() => handleCardClick(product)}
                  data-testid="product-card"
                />
              ))}
            </div>
          </div>
          {selectedProductById && (
            <Details product={selectedProductById} onClose={handleCardClose} />
          )}
        </div>
        <Paginator
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </Layout>
    );
  }
  return (
    <>
      <h2>Not Found</h2>
      <div>There is no spoon</div>
    </>
  );
}

export default Content;
