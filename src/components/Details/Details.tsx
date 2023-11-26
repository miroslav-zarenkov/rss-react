import React from 'react';
import styles from './Details.module.css';
import Image from 'next/image';

type Product = {
  title: string;
  thumbnail: string;
  description: string;
  id: number;
};

type DetailsProps = {
  product: Product;
  onClose: () => void;
};

function Details({ product, onClose }: DetailsProps) {
  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      <div
        className={styles['products-details']}
        onClick={(event) => {
          event?.stopPropagation;
        }}
        data-testid="details"
      >
        <button
          className={styles.button}
          onClick={onClose}
          data-testid="close-details"
        >
          Close
        </button>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={100}
          height={100}
        ></Image>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>
    </>
  );
}

export default Details;
