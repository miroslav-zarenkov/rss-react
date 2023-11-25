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
};

export const getServerSideProps: GetServerSideProps<
  ProductProps
> = async () => {
  try {
    const res = await fetch('https://dummyjson.com/products?limit=5&skip=0');
    const { products } = await res.json();
    console.log(products);
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        products: [],
      },
    };
  }
};

const Home = ({ products }: ProductProps) => {
  return (
    <ErrorBoundary>
      <Header />
      <Content products={products} />
    </ErrorBoundary>
  );
};

export default Home;
