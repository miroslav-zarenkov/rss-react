interface PaginatorProps {
  cardsPerPage: string;
  totalProducts: number;
}

function Paginator({ cardsPerPage, totalProducts }: PaginatorProps) {
  const productsPerPage = parseInt(cardsPerPage, 10);
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  return (
    <div className="paginator">
      {pages.map((page) => (
        <button key={page}>Page {page}</button>
      ))}
    </div>
  );
}

export default Paginator;
