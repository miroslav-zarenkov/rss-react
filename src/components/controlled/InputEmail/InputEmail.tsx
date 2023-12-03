import { ChangeEvent } from 'react';

interface InputEmailProps {
  value: string;
  onChange: (value: string) => void;
}

function InputEmail({ value, onChange }: InputEmailProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputEmail;
