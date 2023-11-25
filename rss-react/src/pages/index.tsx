import Content from '@/components/Content/Content';
import Header from '@/components/Header/Header';
import ErrorBoundary from '@/providers/ErrorBoundary/ErrorBoundary';
import type { GetServerSideProps } from 'next';
import router from 'next/router';

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
  cardsPerPage: number;
};

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
    const cardsPerPage = query.perPage || '5';
    const skip =
      (parseInt(page as string, 10) - 1) * parseInt(cardsPerPage as string, 10);
    const slicedProducts = products.slice(
      skip,
      skip + parseInt(cardsPerPage as string, 10)
    );
    const totalPages = Math.ceil(
      products.length / parseInt(cardsPerPage as string, 10)
    );
    return {
      props: {
        products: slicedProducts,
        totalPages,
        currentPage: parseInt(page as string, 10) || 1,
        cardsPerPage: parseInt(cardsPerPage as string, 10) || 5,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        products: [],
        totalPages: 1,
        currentPage: 1,
        cardsPerPage: 5,
      },
    };
  }
};

const Home = ({
  products,
  totalPages,
  currentPage,
  cardsPerPage,
}: ProductProps) => {
  const handlePageChange = (newPage: number) => {
    router.push(`/?page=${newPage}&perPage=${cardsPerPage}`);
  };
  const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(event.target.value, 10);
    router.push(`/?page=1&perPage=${selectedValue}`);
  };
  return (
    <ErrorBoundary>
      <Header />
      <Content
        products={products}
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        handlePerPageChange={handlePerPageChange}
      />
    </ErrorBoundary>
  );
};

export default Home;
