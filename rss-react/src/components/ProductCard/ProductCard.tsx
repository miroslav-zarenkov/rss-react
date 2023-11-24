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
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles['product-card']}>
      <h3>{product.title}</h3>
      {product.thumbnail ? (
        <Image src={product.thumbnail} alt={product.title} />
      ) : (
        <Image src={PlaceholderImage} alt="Placeholder Image" />
      )}
      <div>{product.description}</div>
    </div>
  );
}

export default ProductCard;
