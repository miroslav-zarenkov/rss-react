import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface SearchButtonProps {
  handleClick: (page: string) => void;
  isButtonDisabled: boolean;
}

function SearchButton({ handleClick, isButtonDisabled }: SearchButtonProps) {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleClick('1');
    }
  };
  const { pageNumber } = useParams();

  useEffect(() => {
    handleClick(pageNumber ?? '1');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button
      className="button search"
      onClick={() => handleClick('1')}
      disabled={isButtonDisabled}
      onKeyDown={handleKeyPress}
      type="submit"
    >
      {isButtonDisabled ? 'Loading...' : 'Search'}
    </button>
  );
}

export default SearchButton;
