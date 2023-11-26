import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/components/Header/Header';
import Content from '@/components/Content/Content';
import mockRouter from 'next-router-mock';
import userEvent from '@testing-library/user-event';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

const mockProducts = [
  {
    title: 'Product 1',
    thumbnail: '/thumbnail1.jpg',
    description: 'Description 1',
    id: 1,
  },
  {
    title: 'Product 2',
    thumbnail: '/thumbnail2.jpg',
    description: 'Description 2',
    id: 2,
  },
  {
    title: 'Product 3',
    thumbnail: '/thumbnail3.jpg',
    description: 'Description 3',
    id: 3,
  },
  {
    title: 'Product 4',
    thumbnail: '/thumbnail4.jpg',
    description: 'Description 4',
    id: 4,
  },
  {
    title: 'Product 5',
    thumbnail: '/thumbnail5.jpg',
    description: 'Description 5',
    id: 5,
  },
  {
    title: 'Product 6',
    thumbnail: '/thumbnail6.jpg',
    description: 'Description 6',
    id: 6,
  },
  {
    title: 'Product 7',
    thumbnail: '/thumbnail7.jpg',
    description: 'Description 7',
    id: 7,
  },
  {
    title: 'Product 8',
    thumbnail: '/thumbnail8.jpg',
    description: 'Description 8',
    id: 8,
  },
  {
    title: 'Product 9',
    thumbnail: '/thumbnail9.jpg',
    description: 'Description 9',
    id: 9,
  },
  {
    title: 'Product 10',
    thumbnail: '/thumbnail10.jpg',
    description: 'Description 10',
    id: 10,
  },
];

describe('Home component', () => {
  it('should render Home component', () => {
    mockRouter.push('/');
    render(
      <>
        <Header handleInputChange={() => {}} />
        <Content
          products={mockProducts}
          totalPages={1}
          currentPage={1}
          onPageChange={() => {}}
          handlePerPageChange={() => {}}
          handleDetailsChange={() => {}}
        />
      </>
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('should correctly handlePageChange', async () => {
    mockRouter.push('/');
    const cardsPerPage = '5';
    const inputValue = '';

    const handlePageChange = (newPage: number) => {
      mockRouter.push({
        pathname: '/',
        query: {
          page: '2',
          perPage: cardsPerPage,
          inputValue: inputValue,
          details: '',
        },
      });
    };

    render(
      <Content
        products={mockProducts}
        totalPages={2}
        currentPage={1}
        onPageChange={handlePageChange}
        handlePerPageChange={() => {}}
        handleDetailsChange={() => {}}
      />
    );
    await userEvent.click(screen.getByText('Page 2'));
    expect(mockRouter).toMatchObject({
      asPath: '/?page=2&perPage=5&inputValue=&details=',
    });
  });
});
