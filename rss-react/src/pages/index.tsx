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
  inputValue: string;
};

export const getServerSideProps: GetServerSideProps<ProductProps> = async ({
  query,
}) => {
  try {
    const page = query.page || '1';
    const cardsPerPage = query.perPage || '5';
    const inputValue = query.inputValue || '';
    const trimmedValue = (inputValue as string).trim();
    const url = inputValue
      ? `https://dummyjson.com/products/search?q=${trimmedValue}&limit=100&skip=0`
      : `https://dummyjson.com/products?limit=100&skip=0`;
    const res = await fetch(url);
    const { products } = await res.json();
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
        inputValue: trimmedValue,
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
        inputValue: '',
      },
    };
  }
};

const Home = ({
  products,
  totalPages,
  currentPage,
  cardsPerPage,
  inputValue,
}: ProductProps) => {
  const handlePageChange = (newPage: number) => {
    router.push({
      pathname: '/',
      query: {
        page: newPage,
        perPage: cardsPerPage,
        inputValue: inputValue,
      },
    });
  };
  const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(event.target.value, 10);
    router.push({
      pathname: '/',
      query: {
        page: 1,
        perPage: selectedValue,
        inputValue: inputValue,
      },
    });
  };
  const handleInputChange = (value: string) => {
    router.push({
      pathname: '/',
      query: {
        page: 1,
        perPage: cardsPerPage,
        inputValue: value,
      },
    });
  };
  return (
    <ErrorBoundary>
      <Header handleInputChange={handleInputChange} />
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
