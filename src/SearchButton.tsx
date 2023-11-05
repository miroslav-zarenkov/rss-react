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
