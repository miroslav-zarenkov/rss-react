import { ChangeEvent, useState } from 'react';
import * as yup from 'yup';

const genderSchema = yup.object().shape({
  gender: yup.string().required('Gender is required'),
});

interface InputGenderProps {
  value: string;
  onChange: (value: string) => void;
}

function InputGender({ value, onChange }: InputGenderProps) {
  const [error, setError] = useState<string | undefined>(undefined);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
    setError(undefined);
  };

  const validateGender = async () => {
    try {
      await genderSchema.validate({ gender: value }, { abortEarly: false });
      setError(undefined);
    } catch (validationError) {
      if (validationError instanceof yup.ValidationError) {
        setError(validationError.errors[0]);
      }
    }
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
        onBlur={validateGender}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        id="female"
        name="gender"
        value="Female"
        checked={value === 'Female'}
        onChange={handleChange}
        onBlur={validateGender}
      />
      <label htmlFor="female">Female</label>
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

export default InputGender;
