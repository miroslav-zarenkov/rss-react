import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="big" onClick={handleClose}></div>
      <div
        className="products-details"
        onClick={(event) => {
          event?.stopPropagation;
        }}
      >
        <button onClick={handleClose}>Close</button>
        {detailsData ? (
          <div>
            <h2>{detailsData.title}</h2>
            <p>{detailsData.description}</p>
            <img src={detailsData.thumbnail} alt={detailsData.title} />
          </div>
        ) : (
          <div>No data available</div>
        )}
      </div>
    </>
  );
}
export default Details;
