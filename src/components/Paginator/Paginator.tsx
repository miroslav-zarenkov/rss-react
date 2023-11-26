import styles from './Paginator.module.css';

type PaginatorProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (newPage: number) => void;
};

function Paginator({ totalPages, currentPage, onPageChange }: PaginatorProps) {
  const pages = Array.from({ length: totalPages }, (_, index) =>
    (index + 1).toString()
  );
  return (
    <div className={styles.paginator} data-testid="paginator">
      {pages.map((page) => (
        <button
          className={styles.button}
          key={page}
          onClick={() => onPageChange(parseInt(page, 10))}
          disabled={parseInt(page, 10) === currentPage}
        >
          Page {page}
        </button>
      ))}
    </div>
  );
}

export default Paginator;
