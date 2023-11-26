import Content from '@/components/Content/Content';
import Header from '@/components/Header/Header';
import ErrorBoundary from '@/providers/ErrorBoundary/ErrorBoundary';
import router from 'next/router';
import { dummyApi } from './api/dummyApi';
import { wrapper } from './api/store';

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
  details: string;
};

interface ApiProps {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query }) => {
      const page = (query.page as string) || '1';
      const cardsPerPage = (query.perPage as string) || '5';
      const inputValue = (query.inputValue as string) || '';
      const details = (query.details as string) || '';
      const trimmedValue = (inputValue as string).trim();
      store.dispatch(
        dummyApi.endpoints.searchProducts.initiate({
          searchQuery: trimmedValue,
          itemsPerPage: cardsPerPage,
          pageNumber: page,
        })
      );
      const data = await Promise.all(
        store.dispatch(dummyApi.util.getRunningQueriesThunk())
      );
      const products = data.find(
        (item) => item.endpointName === 'searchProducts'
      )?.data as ApiProps;
      return {
        props: {
          products: products.products,
          totalPages: Math.ceil(products.total / parseInt(cardsPerPage, 10)),
          currentPage: parseInt(page, 10),
          cardsPerPage: parseInt(cardsPerPage, 10),
          inputValue: trimmedValue,
          details: details,
        },
      };
    }
);

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
        details: '',
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
        details: '',
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
        details: '',
      },
    });
  };
  const handleDetailsChange = (id: string) => {
    router.push({
      pathname: '/',
      query: {
        ...router.query,
        details: id,
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
        handleDetailsChange={handleDetailsChange}
      />
    </ErrorBoundary>
  );
};

export default Home;
