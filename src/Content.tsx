import ProductCard from './ProductCard';
import Paginator from './Paginator';
import SelectPages from './SelectPages';
import { useContext, useEffect, useRef, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import DataContext from './DataContext';

function Content() {
  const { products, isButtonDisabled, cardsPerPage, handleClick } =
    useContext(DataContext);
  const navigate = useNavigate();
  const isMounted = useRef(false);
  const [detailsAreClosed, setDetailsAreClosed] = useState(true);
  const handleContentClick = () => {
    if (!detailsAreClosed) {
      navigate('../');
      setDetailsAreClosed(true);
    }

    console.log(detailsAreClosed);
  };
  useEffect(() => {
    if (isMounted.current) {
      handleClick('1');
    } else {
      isMounted.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardsPerPage]);
  if (isButtonDisabled) {
    return (
      <main className="main">
        <div className="loader"></div>
      </main>
    );
  }
  if (products && products.length > 0) {
    return (
      <main className="main">
        <div className="content-wrapper" onClick={handleContentClick}>
          <SelectPages />
          <div className="products">
            <div className="products-data" onClick={handleContentClick}>
              {products.map((product, index) => (
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
    <main className="main">
      <h2>Not Found</h2>
      <div>There is no spoon</div>
    </main>
  );
}

export default Content;
