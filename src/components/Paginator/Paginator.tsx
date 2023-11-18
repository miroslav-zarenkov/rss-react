import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from '../../context/DataContext';
import styles from './Paginator.module.scss';
import { useAppSelector } from '../../redux/redux';

function Paginator() {
  const { cardsPerPage } = useAppSelector((state) => state.cardsPerPage);
  const { totalProducts, setCurrentPage, currentPage } =
    useContext(DataContext);
  const navigate = useNavigate();
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
            setCurrentPage(parseInt(page, 10));
            navigate(`/page/${page}`);
          }}
          disabled={parseInt(page, 10) === currentPage}
        >
          Page {page}
        </button>
      ))}
    </div>
  );
}

export default Paginator;
