import SearchButton from '../SearchButton/SearchButton';
import Input from '../Input/Input';
import ErrorButton from '../ErrorButton/ErrorButton';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Dummy Products</h1>
      <form action="" className={styles['search-form']}>
        <Input />
        <SearchButton />
      </form>
      <ErrorButton />
    </header>
  );
}

export default Header;
