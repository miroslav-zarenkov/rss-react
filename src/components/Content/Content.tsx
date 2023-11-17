import ProductCard from '../ProductCard/ProductCard';
import Paginator from '../Paginator/Paginator';
import SelectPages from '../SelectPages/SelectPages';
import { useContext, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import DataContext from '../../context/DataContext';
import styles from './Content.module.scss';

function Content() {
  const { products, isButtonDisabled } = useContext(DataContext);
  const navigate = useNavigate();
  const [detailsAreClosed, setDetailsAreClosed] = useState(true);
  const handleContentClick = () => {
    if (!detailsAreClosed) {
      navigate('../');
      setDetailsAreClosed(true);
    }
  };
  if (isButtonDisabled) {
    return (
      <main className={styles.main}>
        <div className={styles.loader}></div>
      </main>
    );
  }
  if (products && products.length > 0) {
    return (
      <main className={styles.main}>
        <SelectPages />
        <div className={styles['content-wrapper']} onClick={handleContentClick}>
          <div className={styles.products}>
            <div
              className={styles['products-data']}
              onClick={handleContentClick}
            >
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
    <main className={styles.main}>
      <h2>Not Found</h2>
      <div>There is no spoon</div>
    </main>
  );
}

export default Content;
