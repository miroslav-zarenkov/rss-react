import { ChangeEvent } from 'react';

interface InputGenderProps {
  value: string;
  onChange: (value: string) => void;
}

function InputGender({ value, onChange }: InputGenderProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label>Gender:</label>
      <input
        type="radio"
        id="male"
        name="gender"
        value="Male"
        checked={value === 'Male'}
        onChange={handleChange}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        id="female"
        name="gender"
        value="Female"
        checked={value === 'Female'}
        onChange={handleChange}
      />
      <label htmlFor="female">Female</label>
    </div>
  );
}

export default InputGender;
