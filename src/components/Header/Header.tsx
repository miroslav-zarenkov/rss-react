import ErrorButton from '../ErrorButton/ErrorButton';
import styles from './Header.module.scss';
import SearchElement from '../SearchElement/SearchElement';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Dummy Products</h1>
      <SearchElement />
      <ErrorButton />
    </header>
  );
}

export default Header;
