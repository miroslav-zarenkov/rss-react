import { useNavigate } from 'react-router-dom';

interface PaginatorProps {
  cardsPerPage: string;
  totalProducts: number;
  handleClick: (page: string) => void;
}

function Paginator({
  cardsPerPage,
  totalProducts,
  handleClick,
}: PaginatorProps) {
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
