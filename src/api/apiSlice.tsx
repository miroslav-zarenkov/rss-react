import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type QueryParams = {
  searchTerm: string;
  cardsPerPage: string;
  pageNumber: string;
};

interface Data {
  products: Product[] | null;
  total: number;
  skip: number;
  limit: number;
}

interface Product {
  title: string;
  thumbnail: string;
  description: string;
  id: number;
}

const baseQuery = fetchBaseQuery({ baseUrl: 'https://dummyjson.com/products' });

export const dummyApi = createApi({
  baseQuery,
  endpoints: (build) => ({
    getProducts: build.query<Data, QueryParams>({
      query: ({ searchTerm, cardsPerPage, pageNumber }) => ({
        url: '/search',
        params: {
          q: searchTerm,
          limit: cardsPerPage,
          skip: (parseInt(pageNumber, 10) - 1) * parseInt(cardsPerPage, 10),
        },
      }),
    }),
  }),
});

export const { useGetProductsQuery } = dummyApi;
