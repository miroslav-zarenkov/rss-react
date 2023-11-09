import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from './DataContext';

function Paginator() {
  const { cardsPerPage, totalProducts, handleClick } = useContext(DataContext);
  const navigate = useNavigate();
  const productsPerPage = parseInt(cardsPerPage, 10);
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const pages = Array.from({ length: totalPages }, (_, index) =>
    (index + 1).toString()
  );
  return (
    <div className="paginator">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => {
            handleClick(page);
            navigate(`/page/${page}`);
          }}
        >
          Page {page}
        </button>
      ))}
    </div>
  );
}

export default Paginator;
