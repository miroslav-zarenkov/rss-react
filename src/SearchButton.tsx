interface SearchButtonProps {
  handleClick: () => void;
  isButtonDisabled: boolean;
}

function SearchButton({ handleClick, isButtonDisabled }: SearchButtonProps) {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      className="button search"
      onClick={() => handleClick()}
      disabled={isButtonDisabled}
      onKeyDown={handleKeyPress}
      type="submit"
    >
      {isButtonDisabled ? 'Searching...' : 'Search'}
    </button>
  );
}

export default SearchButton;
