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

const page = '1';
const cardsPerPage = '10';
const inputValue = '';

export const getServerSideProps: GetServerSideProps<
  ProductProps
> = async () => {
  try {
    const skip = (parseInt(page, 10) - 1) * parseInt(cardsPerPage, 10);
    const trimmedValue = inputValue.trim();
    const url = inputValue
      ? `https://dummyjson.com/products/search?q=${trimmedValue}&limit=${cardsPerPage}&skip=${skip}`
      : `https://dummyjson.com/products?limit=${cardsPerPage}&skip=${skip}`;
    const res = await fetch(url);
    const { products, total } = await res.json();
    const totalPages = Math.ceil(total / parseInt(cardsPerPage, 10));
    return {
      props: {
        products,
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
  return (
    <ErrorBoundary>
      <Header />
      <Content products={products} totalPages={totalPages} />
    </ErrorBoundary>
  );
};

export default Home;
