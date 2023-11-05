interface PaginatorProps {
  cardsPerPage: string;
  totalProducts: number;
  handleClick: (page: number) => void;
}

function Paginator({
  cardsPerPage,
  totalProducts,
  handleClick,
}: PaginatorProps) {
  const productsPerPage = parseInt(cardsPerPage, 10);
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  console.log(pages);
  return (
    <div className="paginator">
      {pages.map((page) => (
        <button key={page} onClick={() => handleClick(page)}>
          Page {page}
        </button>
      ))}
    </div>
  );
}

export default Paginator;
