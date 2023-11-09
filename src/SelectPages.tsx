import { ChangeEvent, useContext, useState } from 'react';
import DataContext from './DataContext';

function SelectPages() {
  const { setCardsPerPage } = useContext(DataContext);
  const [selectedValue, setSelectedValue] = useState(
    localStorage.getItem('cardsPerPage') || '5'
  );

  const handleSelectChange = (event: ChangeEvent) => {
    const newValue = (event.target as HTMLSelectElement)?.value;
    localStorage.setItem('cardsPerPage', newValue);
    setSelectedValue(newValue);
    setCardsPerPage(newValue);
  };

  return (
    <div className="pages-selector">
      <label htmlFor="pages">Products per page:</label>
      <select
        id="pages"
        name="pages"
        onChange={handleSelectChange}
        value={selectedValue}
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
