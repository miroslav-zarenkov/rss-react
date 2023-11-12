import SearchButton from './SearchButton';
import Input from './Input';
import ErrorButton from './ErrorButton';

function Header() {
  return (
    <header className="header">
      <h1>Dummy Products</h1>
      <form action="" className="search-form">
        <Input />
        <SearchButton />
      </form>
      <ErrorButton />
    </header>
  );
}

export default Header;
