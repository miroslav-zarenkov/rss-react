import { Link } from 'react-router-dom';
import styles from './NavMainPage.module.css';

function NavMainPage() {
  return (
    <nav>
      <ul className={styles.nav}>
        <Link to="/uncontrolled" className={styles.card}>
          <li>Uncontrolled Form</li>
        </Link>
        <Link to="/controlled" className={styles.card}>
          <li>Controlled Form</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavMainPage;
