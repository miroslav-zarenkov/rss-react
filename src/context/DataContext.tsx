import { createContext } from 'react';

interface Product {
  title: string;
  thumbnail: string;
  description: string;
  id: number;
}

interface DataContext {
  inputValue: string;
  isButtonDisabled: boolean;
  products: Product[] | null;
  cardsPerPage: string;
  totalProducts: number;
  currentPage: number;
  setInputValue: (string: string) => void;
  setIsButtonDisabled: (boolean: boolean) => void;
  setProducts: (products: Product[] | null) => void;
  setCardsPerPage: (string: string) => void;
  setTotalProducts: (number: number) => void;
  setCurrentPage: (number: number) => void;
}

const DataContext = createContext<DataContext>({
  inputValue: '',
  isButtonDisabled: false,
  products: null,
  cardsPerPage: '',
  totalProducts: 0,
  currentPage: 1,
  setInputValue: () => {},
  setIsButtonDisabled: () => {},
  setProducts: () => {},
  setCardsPerPage: () => {},
  setTotalProducts: () => {},
  setCurrentPage: () => {},
});

export type { Product };
export default DataContext;
