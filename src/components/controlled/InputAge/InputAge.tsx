import { ChangeEvent } from 'react';

interface InputAgeProps {
  value: string;
  onChange: (value: string) => void;
}

function InputAge({ value, onChange }: InputAgeProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        placeholder="Enter your age"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputAge;
