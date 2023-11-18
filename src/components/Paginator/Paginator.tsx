import { useNavigate } from 'react-router-dom';
import styles from './Paginator.module.scss';
import { useAppSelector } from '../../redux/redux';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/currentPageSlice';

function Paginator() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cardsPerPage } = useAppSelector((state) => state.cardsPerPage);
  const { totalProducts } = useAppSelector((state) => state.totalProducts);
  const { currentPage } = useAppSelector((state) => state.currentPage);
  const productsPerPage = parseInt(cardsPerPage, 10);
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const pages = Array.from({ length: totalPages }, (_, index) =>
    (index + 1).toString()
  );
  return (
    <div className={styles.paginator}>
      {pages.map((page) => (
        <button
          className={styles.button}
          key={page}
          onClick={() => {
            dispatch(setCurrentPage(page));
            navigate(`/page/${page}`);
          }}
          disabled={parseInt(page, 10) === parseInt(currentPage, 10)}
        >
          Page {page}
        </button>
      ))}
    </div>
  );
}

export default Paginator;
