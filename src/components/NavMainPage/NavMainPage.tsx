import { Link } from 'react-router-dom';
import styles from './NavMainPage.module.css';
import { useAppSelector } from '../../redux/redux';

function NavMainPage() {
  const { name } = useAppSelector((state) => state.name);
  const { age } = useAppSelector((state) => state.age);
  const { email } = useAppSelector((state) => state.email);
  const { gender } = useAppSelector((state) => state.gender);
  const { terms } = useAppSelector((state) => state.terms);
  const { image } = useAppSelector((state) => state.image);
  const termsString = terms ? 'Accepted' : 'Not Accepted';
  console.log(image);
  return (
    <nav>
      <ul className={styles.nav}>
        <Link to="/uncontrolled" className={styles.card}>
          <li>Uncontrolled Form</li>
          <div>Name: {name}</div>
          <div>Age: {age}</div>
          <div>Email: {email}</div>
          <div>Gender: {gender}</div>
          <div>Terms: {termsString}</div>
          <div>
            {image && (
              <div>
                <img
                  src={image as string}
                  alt="Uploaded"
                  style={{ maxWidth: '180px' }}
                />
              </div>
            )}
          </div>
        </Link>
        <Link to="/controlled" className={styles.card}>
          <li>Controlled Form</li>
          <div>Name: {name}</div>
          <div>Age: {age}</div>
          <div>Email: {email}</div>
          <div>Gender: {gender}</div>
          <div>Terms: {termsString}</div>
          <div>
            {image && (
              <div>
                <img
                  src={image as string}
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
