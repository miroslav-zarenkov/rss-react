import { ChangeEvent, useEffect, useState } from 'react';

interface SelectPagesProps {
  handleCardsPerPageChange: (string: string) => void;
}

function SelectPages({ handleCardsPerPageChange }: SelectPagesProps) {
  const [selectedValue, setSelectedValue] = useState(
    localStorage.getItem('cardsPerPage') || '5'
  );

  useEffect(() => {
    handleCardsPerPageChange(selectedValue);
  }, [handleCardsPerPageChange, selectedValue]);

  const handleSelectChange = (event: ChangeEvent) => {
    const newValue = (event.target as HTMLSelectElement)?.value;
    localStorage.setItem('cardsPerPage', newValue);
    setSelectedValue(newValue);
  };

  return (
    <div className="pages-selector">
      <label htmlFor="pages">Beers per page:</label>
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
