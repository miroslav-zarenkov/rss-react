import styles from './SearchElement.module.css';

const SearchElement = () => {
  return (
    <div className={styles['search-form']}>
      <input
        type="text"
        placeholder="Search Products"
        className={styles['search-input']}
      />
      <button className={`${styles.button} ${styles.search}`} type="button">
        Search
      </button>
    </div>
  );
};

export default SearchElement;
