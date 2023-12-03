import { ChangeEvent, useState } from 'react';
import * as yup from 'yup';

const inputAgeSchema = yup.object().shape({
  age: yup
    .number()
    .positive('Age must be a positive number')
    .integer('Age must be an integer')
    .required('Age is required'),
});

interface InputAgeProps {
  value: string;
  onChange: (value: string) => void;
}

function InputAge({ value, onChange }: InputAgeProps) {
  const [error, setError] = useState<string | undefined>(undefined);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
    setError(undefined);
  };

  const validateInput = async () => {
    try {
      await inputAgeSchema.validate({ age: value }, { abortEarly: false });
      setError(undefined);
    } catch (validationError) {
      if (validationError instanceof yup.ValidationError) {
        setError(validationError.errors[0]);
      }
    }
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
        onBlur={validateInput}
      />
      {!error && (
        <div style={{ display: 'hidden', height: '20px' }}>{error}</div>
      )}
      {error && (
        <div style={{ color: 'red', display: 'block', height: '20px' }}>
          {error}
        </div>
      )}
    </div>
  );
}

export default InputAge;
