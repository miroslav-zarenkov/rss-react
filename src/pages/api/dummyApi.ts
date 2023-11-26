import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

type Product = {
  title: string;
  thumbnail: string;
  description: string;
  id: number;
};

interface ProductProps {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
interface QueryParams {
  searchQuery: string;
  itemsPerPage: string;
  pageNumber: string;
}

export const dummyApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    searchProducts: builder.query<ProductProps, QueryParams>({
      query: ({ searchQuery, itemsPerPage, pageNumber }) => ({
        url: '/products/search',
        params: {
          q: searchQuery,
          limit: itemsPerPage,
          skip: (parseInt(pageNumber, 10) - 1) * parseInt(itemsPerPage, 10),
        },
      }),
    }),
    getProducts: builder.query<ProductProps, number>({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useSearchProductsQuery,
  util: { getRunningQueriesThunk },
} = dummyApi;

export const { getProducts, searchProducts } = dummyApi.endpoints;
