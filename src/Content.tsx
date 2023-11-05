import ProductCard from './ProductCard';
import Paginator from './Paginator';
import SelectPages from './SelectPages';
import { useEffect, useRef, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

interface ContentProps {
  products: Array<{
    title: string;
    thumbnail: string;
    description: string;
    id: number;
  }> | null;
  isButtonDisabled: boolean;
  setCardsPerPage: (string: string) => void;
  cardsPerPage: string;
  totalProducts: number;
  handleClick: (page: string) => void;
}

function Content({
  products,
  isButtonDisabled,
  setCardsPerPage,
  cardsPerPage,
  totalProducts,
  handleClick,
}: ContentProps) {
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
          <SelectPages setCardsPerPage={setCardsPerPage} />
          <div className="products">
            <div className="products-data" onClick={handleContentClick}>
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
            <Outlet />
          </div>
        </div>
        <Paginator
          cardsPerPage={cardsPerPage}
          totalProducts={totalProducts}
          handleClick={handleClick}
        />
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
