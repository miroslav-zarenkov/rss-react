import { ChangeEvent, useState } from 'react';
import * as yup from 'yup';

interface InputConfirmPasswordProps {
  value: string;
  password: string;
  onChange: (value: string) => void;
}

function InputConfirmPassword({
  value,
  password,
  onChange,
}: InputConfirmPasswordProps) {
  const [error, setError] = useState<string | undefined>(undefined);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
    setError(undefined);
  };
  const inputConfirmPasswordSchema = yup.object().shape({
    confirmPassword: yup
      .string()
      .oneOf([password], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const validateInput = async () => {
    try {
      await inputConfirmPasswordSchema.validate(
        { confirmPassword: value },
        { abortEarly: false }
      );
      setError(undefined);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        setError(error.errors[0]);
      }
    }
  };

  return (
    <div>
      <label htmlFor="confirm-password">Confirm Password:</label>
      <input
        type="password"
        id="confirm-password"
        placeholder="Confirm your password"
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

export default InputConfirmPassword;
