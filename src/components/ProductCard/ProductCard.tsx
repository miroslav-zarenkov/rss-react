import PlaceholderImage from '../../assets/images/placeholder_image.png';
import styles from './ProductCard.module.css';
import Image from 'next/image';

interface ProductCardProps {
  product: {
    title: string;
    thumbnail: string;
    description: string;
    id: number;
  };
  onClick: () => void;
}

function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      className={styles['product-card']}
      onClick={onClick}
      data-testid="product-card"
    >
      <h3>{product.title}</h3>
      {product.thumbnail ? (
        <Image
          src={product.thumbnail}
          width={300}
          height={300}
          alt={product.title}
        />
      ) : (
        <Image
          src={PlaceholderImage}
          width={300}
          height={300}
          alt="Placeholder Image"
        />
      )}
      <div>{product.description}</div>
    </div>
  );
}

export default ProductCard;
