import { createContext } from 'react';

interface Product {
  title: string;
  thumbnail: string;
  description: string;
  id: number;
}

interface DataContext {
  isButtonDisabled: boolean;
  products: Product[] | null;
  totalProducts: number;
  currentPage: number;
  setIsButtonDisabled: (boolean: boolean) => void;
  setProducts: (products: Product[] | null) => void;
  setTotalProducts: (number: number) => void;
  setCurrentPage: (number: number) => void;
}

const DataContext = createContext<DataContext>({
  isButtonDisabled: false,
  products: null,
  totalProducts: 0,
  currentPage: 1,
  setIsButtonDisabled: () => {},
  setProducts: () => {},
  setTotalProducts: () => {},
  setCurrentPage: () => {},
});

export type { Product };
export default DataContext;
