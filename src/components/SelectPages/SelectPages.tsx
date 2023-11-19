import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SelectPages.module.scss';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/redux';
import { setCardsPerPage } from '../../redux/cardsPerPageSlice';

function SelectPages() {
  const dispatch = useDispatch();
  const { cardsPerPage } = useAppSelector((state) => state.cardsPerPage);
  const navigate = useNavigate();
  const handleSelectChange = (event: ChangeEvent) => {
    const newValue = (event.target as HTMLSelectElement)?.value;
    localStorage.setItem('cardsPerPage', newValue);
    dispatch(setCardsPerPage(newValue));
    navigate(`/page/1`);
  };
  return (
    <div className={styles['pages-selector']}>
      <label htmlFor="pages">Products per page:</label>
      <select
        id="pages"
        name="pages"
        onChange={handleSelectChange}
        value={cardsPerPage}
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
