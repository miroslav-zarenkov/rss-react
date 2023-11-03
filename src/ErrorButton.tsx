import { useState } from 'react';

function ErrorButton() {
  const [hasError, setHasError] = useState(false);

  const handleClick = () => {
    setHasError(true);
  };

  if (hasError) {
    throw new Error('I crashed!');
  }

  return (
    <button className="button error" onClick={handleClick}>
      Throw Error
    </button>
  );
}

export default ErrorButton;
