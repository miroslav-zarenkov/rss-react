import ErrorButton from '../ErrorButton/ErrorButton';
import styles from './Header.module.css';
import SearchElement from '../SearchElement/SearchElement';

type HeaderProps = {
  handleInputChange: (value: string) => void;
};

function Header({ handleInputChange }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1>Dummy Products</h1>
      <SearchElement handleInputChange={handleInputChange} />
      <ErrorButton />
    </header>
  );
}

export default Header;
