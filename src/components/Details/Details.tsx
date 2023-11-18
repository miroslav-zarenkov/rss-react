import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Details.module.scss';

interface DetailsData {
  title: string;
  description: string;
  thumbnail: string;
}

function Details() {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate('../');
  };
  const [detailsData, setDetailsData] = useState<DetailsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setDetailsData(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <>
        <div className={styles.overlay} onClick={handleClose}></div>
        <div
          className={styles['products-details']}
          onClick={(event) => {
            event?.stopPropagation;
          }}
        >
          <div className={styles.loader}></div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={styles.overlay} onClick={handleClose}></div>
      <div
        className={styles['products-details']}
        onClick={(event) => {
          event?.stopPropagation;
        }}
      >
        <h3>Detailed Card</h3>
        {detailsData ? (
          <div>
            <h2>{detailsData.title}</h2>
            <p>{detailsData.description}</p>
            <img src={detailsData.thumbnail} alt={detailsData.title} />
          </div>
        ) : (
          <div>No data available</div>
        )}
        <button className={styles.button} onClick={handleClose}>
          Close
        </button>
      </div>
    </>
  );
}
export default Details;
