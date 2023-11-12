import { ChangeEvent, createContext } from 'react';

interface DataContext {
  products: Array<{
    title: string;
    thumbnail: string;
    description: string;
    id: number;
  }> | null;
  isButtonDisabled: boolean;
  setCardsPerPage: (string: string) => void;
  cardsPerPage: string;
  totalProducts: number;
  handleClick: (page: string) => void;
  inputValue: string;
  handleInput: (event: ChangeEvent) => void;
}

const DataContext = createContext<DataContext>({
  products: [
    {
      title: '',
      thumbnail: '',
      description: '',
      id: 0,
    },
  ],
  isButtonDisabled: false,
  setCardsPerPage: () => {},
  cardsPerPage: '',
  totalProducts: 0,
  handleClick: () => {},
  inputValue: '',
  handleInput: () => {},
});

export default DataContext;
