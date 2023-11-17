import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from './DataContext';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

function SearchButton() {
  const { handleClick, isButtonDisabled } = useContext(DataContext);
  const { pageNumber } = useParams();
  const reduxSearchTerm = useSelector((state: RootState) => state.search);
  const handleKeyPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleClick('1');
    }
  };

  useEffect(() => {
    handleClick(pageNumber ?? '1');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduxSearchTerm]);

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
