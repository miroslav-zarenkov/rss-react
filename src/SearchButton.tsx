import { Component } from 'react';

interface SearchButtonProps {
  handleClick: () => void;
  isButtonDisabled: boolean;
}

class SearchButton extends Component<SearchButtonProps> {
  handleKeyPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.props.handleClick();
    }
  };

  render() {
    const { handleClick, isButtonDisabled } = this.props;
    return (
      <button
        className="button search"
        onClick={handleClick}
        disabled={isButtonDisabled}
        onKeyDown={this.handleKeyPress}
        type="submit"
      >
        {isButtonDisabled ? 'Searching...' : 'Search'}
      </button>
    );
  }
}

export default SearchButton;
