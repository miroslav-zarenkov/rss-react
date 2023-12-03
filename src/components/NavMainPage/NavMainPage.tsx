import { Link } from 'react-router-dom';
import styles from './NavMainPage.module.css';
import { useAppSelector } from '../../redux/redux';

function NavMainPage() {
  const { nameControlled } = useAppSelector((state) => state.nameControlled);
  const { ageControlled } = useAppSelector((state) => state.ageControlled);
  const { emailControlled } = useAppSelector((state) => state.emailControlled);
  const { genderControlled } = useAppSelector(
    (state) => state.genderControlled
  );
  const { termsControlled } = useAppSelector((state) => state.termsControlled);
  const { imageControlled } = useAppSelector((state) => state.imageControlled);
  const termsStringControlled = termsControlled ? 'Accepted' : 'Not Accepted';

  const { nameUncontrolled } = useAppSelector(
    (state) => state.nameUncontrolled
  );
  const { ageUncontrolled } = useAppSelector((state) => state.ageUncontrolled);
  const { emailUncontrolled } = useAppSelector(
    (state) => state.emailUncontrolled
  );
  const { genderUncontrolled } = useAppSelector(
    (state) => state.genderUncontrolled
  );
  const { termsUncontrolled } = useAppSelector(
    (state) => state.termsUncontrolled
  );
  const { imageUncontrolled } = useAppSelector(
    (state) => state.imageUncontrolled
  );
  const termsStringUncontrolled = termsUncontrolled
    ? 'Accepted'
    : 'Not Accepted';

  return (
    <nav>
      <ul className={styles.nav}>
        <Link to="/uncontrolled" className={styles.card}>
          <li>Uncontrolled Form</li>
          <div>Name: {nameUncontrolled}</div>
          <div>Age: {ageUncontrolled}</div>
          <div>Email: {emailUncontrolled}</div>
          <div>Gender: {genderUncontrolled}</div>
          <div>Terms: {termsStringUncontrolled}</div>
          <div>
            {imageUncontrolled && (
              <div>
                <img
                  src={imageUncontrolled as string}
                  alt="Uploaded"
                  style={{ maxWidth: '180px' }}
                />
              </div>
            )}
          </div>
        </Link>
        <Link to="/controlled" className={styles.card}>
          <li>Controlled Form</li>
          <div>Name: {nameControlled}</div>
          <div>Age: {ageControlled}</div>
          <div>Email: {emailControlled}</div>
          <div>Gender: {genderControlled}</div>
          <div>Terms: {termsStringControlled}</div>
          <div>
            {imageControlled && (
              <div>
                <img
                  src={imageControlled as string}
                  alt="Uploaded"
                  style={{ maxWidth: '180px' }}
                />
              </div>
            )}
          </div>
        </Link>
      </ul>
    </nav>
  );
}

export default NavMainPage;
