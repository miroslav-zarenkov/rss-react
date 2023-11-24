import styles from './SelectPages.module.css';

function SelectPages() {
  return (
    <div className={styles['pages-selector']}>
      <label htmlFor="pages">Products per page:</label>
      <select id="pages" name="pages">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="40">40</option>
      </select>
    </div>
  );
}

export default SelectPages;
