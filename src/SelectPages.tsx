import { ChangeEvent } from 'react';

function SelectPages() {
  const handleSelectChange = (event: ChangeEvent) => {
    const newValue = (event.target as HTMLSelectElement)?.value;
    console.log(newValue);
  };

  return (
    <div className="pages-selector">
      <label htmlFor="pages">Beers per page:</label>
      <select id="pages" name="pages" onChange={handleSelectChange}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="40">40</option>
      </select>
    </div>
  );
}

export default SelectPages;
