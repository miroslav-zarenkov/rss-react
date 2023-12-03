import { ChangeEvent } from 'react';

interface InputNameProps {
  value: string;
  onChange: (value: string) => void;
}

function InputName({ value, onChange }: InputNameProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        placeholder="Enter your name"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputName;
