import { ChangeEvent } from 'react';

interface CheckboxTermsProps {
  checked: boolean;
  onChange: (value: boolean) => void;
}

function CheckboxTerms({ checked, onChange }: CheckboxTermsProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div>
      <label htmlFor="accept-terms">Accept T&C</label>
      <input
        type="checkbox"
        id="accept-terms"
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
}

export default CheckboxTerms;
