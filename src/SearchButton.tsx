import { Component } from 'react';

interface SearchButtonProps {
  handleClick: () => void;
  isButtonDisabled: boolean;
}

class SearchButton extends Component<SearchButtonProps> {
  render() {
    const { handleClick, isButtonDisabled } = this.props;
    return (
      <button
        className="button search"
        onClick={handleClick}
        disabled={isButtonDisabled}
      >
        {isButtonDisabled ? 'Searching...' : 'Search'}
      </button>
    );
  }
}

export default SearchButton;
