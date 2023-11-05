import { ChangeEvent } from 'react';
import SearchButton from './SearchButton';
import Input from './Input';
import ErrorButton from './ErrorButton';

interface HeaderProps {
  handleInput: (event: ChangeEvent) => void;
  inputValue: string;
  handleClick: (page: string) => void;
  isButtonDisabled: boolean;
}

function Header({
  handleInput,
  inputValue,
  handleClick,
  isButtonDisabled,
}: HeaderProps) {
  return (
    <header className="header">
      <h1>Dummy Products</h1>
      <form action="" className="search-form">
        <Input handleInput={handleInput} inputValue={inputValue} />
        <SearchButton
          handleClick={handleClick}
          isButtonDisabled={isButtonDisabled}
        />
      </form>
      <ErrorButton />
    </header>
  );
}

export default Header;
