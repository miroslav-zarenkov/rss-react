import { ChangeEvent } from 'react';
import styles from './SelectPages.module.css';
import { useRouter } from 'next/router';

function SelectPages({
  handlePerPageChange,
}: {
  handlePerPageChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}) {
  const router = useRouter();
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    handlePerPageChange(event);
  };
  return (
    <div className={styles['pages-selector']}>
      <label htmlFor="pages">Products per page:</label>
      <select
        id="pages"
        name="pages"
        onChange={handleChange}
        value={router.query.perPage || '5'}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="40">40</option>
      </select>
    </div>
  );
}

export default SelectPages;
