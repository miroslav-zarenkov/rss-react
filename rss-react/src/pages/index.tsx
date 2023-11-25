import { useRouter } from 'next/router';
import { useState } from 'react';
import Content from '@/components/Content/Content';
import Header from '@/components/Header/Header';
import ErrorBoundary from '@/providers/ErrorBoundary/ErrorBoundary';
import type { GetServerSideProps } from 'next';

type Product = {
  title: string;
  thumbnail: string;
  description: string;
  id: number;
};

type ProductProps = {
  products: Product[];
  totalPages: number;
};

const cardsPerPage = '5';
const inputValue = '';

export const getServerSideProps: GetServerSideProps<ProductProps> = async ({
  query,
}) => {
  try {
    const trimmedValue = inputValue.trim();
    const url = inputValue
      ? `https://dummyjson.com/products/search?q=${trimmedValue}&limit=100&skip=0`
      : `https://dummyjson.com/products?limit=100&skip=0`;
    const res = await fetch(url);
    const { products } = await res.json();
    const page = query.page || '1';
    const skip =
      (parseInt(page as string, 10) - 1) * parseInt(cardsPerPage, 10);
    const slicedProducts = products.slice(
      skip,
      skip + parseInt(cardsPerPage, 10)
    );
    const totalPages = Math.ceil(products.length / parseInt(cardsPerPage, 10));
    return {
      props: {
        products: slicedProducts,
        totalPages,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        products: [],
        totalPages: 1,
      },
    };
  }
};

const Home = ({ products, totalPages }: ProductProps) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(
    parseInt(router.query.page as string, 10) || 1
  );
  const handlePageChange = (newPage: number) => {
    router.push(`/?page=${newPage}`);
    setCurrentPage(newPage);
  };
  return (
    <ErrorBoundary>
      <Header />
      <Content
        products={products}
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </ErrorBoundary>
  );
};

export default Home;
