import PlaceholderImage from './assets/images/placeholder_image.png';

interface ProductCardProps {
  product: { title: string; thumbnail: string; description: string };
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      {product.thumbnail ? (
        <img src={product.thumbnail} alt={product.title} />
      ) : (
        <img src={PlaceholderImage} alt="Placeholder Image" />
      )}
      <div>{product.description}</div>
    </div>
  );
}

export default ProductCard;
