import { useRouter } from 'next/router';
import styles from './Paginator.module.css';
import { usePathname, useSearchParams } from 'next/navigation';

function Paginator({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get('page')) || 1;
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
  const pages = Array.from({ length: totalPages }, (_, index) =>
    (index + 1).toString()
  );
  return (
    <div className={styles.paginator}>
      {pages.map((page) => (
        <button
          className={styles.button}
          key={page}
          onClick={() => router.push(createPageURL(page))}
          disabled={parseInt(page, 10) === currentPage}
        >
          Page {page}
        </button>
      ))}
    </div>
  );
}

export default Paginator;
