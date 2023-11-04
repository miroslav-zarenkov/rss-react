function Paginator() {
  const totalBeers = 325;
  const beersPerPage = 10;
  const totalPages = Math.ceil(totalBeers / beersPerPage);
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
