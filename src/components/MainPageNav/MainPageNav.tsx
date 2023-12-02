import { Link } from 'react-router-dom';
import styles from './MainPageNav.module.css';

function MainPageNav() {
  return (
    <nav>
      <ul className={styles.nav}>
        <Link to="/uncontrolled-form" className={styles.card}>
          <li>Uncontrolled Form</li>
        </Link>
        <Link to="/controlled-form" className={styles.card}>
          <li>Controlled Form</li>
        </Link>
      </ul>
    </nav>
  );
}

export default MainPageNav;
