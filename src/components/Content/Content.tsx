import ProductCard from '../ProductCard/ProductCard';
import Paginator from '../Paginator/Paginator';
import SelectPages from '../SelectPages/SelectPages';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import styles from './Content.module.scss';
import { useGetProductsQuery } from '../../api/apiSlice';
import { useAppSelector } from '../../redux/redux';
import { setTotalProducts } from '../../redux/totalProductsSlice';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/currentPageSlice';

function Content() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [detailsAreClosed, setDetailsAreClosed] = useState(true);
  const handleContentClick = () => {
    if (!detailsAreClosed) {
      navigate('../');
      setDetailsAreClosed(true);
    }
  };
  const { searchTerm } = useAppSelector((state) => state.search);
  const { cardsPerPage } = useAppSelector((state) => state.cardsPerPage);
  const { currentPage } = useAppSelector((state) => state.currentPage);
  const { pageNumber } = useParams();
  const { data, isLoading } = useGetProductsQuery({
    searchTerm,
    cardsPerPage,
    pageNumber: pageNumber?.toString() ?? '1',
  });
  useEffect(() => {
    if (data) {
      dispatch(setTotalProducts(data.total));
    }
  }, [data, dispatch]);
  useEffect(() => {
    if (pageNumber && currentPage !== pageNumber) {
      dispatch(setCurrentPage(pageNumber));
    }
  }, [dispatch, currentPage, pageNumber]);

  if (isLoading) {
    return (
      <main className={styles.main}>
        <div className={styles.loader}></div>
      </main>
    );
  }

  if (data?.products && data?.products.length > 0) {
    return (
      <main className={styles.main}>
        <SelectPages />
        <div className={styles['content-wrapper']} onClick={handleContentClick}>
          <div className={styles.products}>
            <div
              className={styles['products-data']}
              onClick={handleContentClick}
            >
              {data?.products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
            <Outlet />
          </div>
        </div>
        <Paginator />
      </main>
    );
  }
  return (
    <main className={styles.main}>
      <h2>Not Found</h2>
      <div>There is no spoon</div>
    </main>
  );
}

export default Content;
