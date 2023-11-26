import { useState } from 'react';
import styles from './ErrorButton.module.css';

function ErrorButton() {
  const [hasError, setHasError] = useState(false);

  const handleClick = () => {
    setHasError(true);
  };

  if (hasError) {
    throw new Error('I crashed!');
  }

  return (
    <button
      className={`${styles.button} ${styles.error}`}
      onClick={handleClick}
    >
      Throw Error
    </button>
  );
}

export default ErrorButton;
