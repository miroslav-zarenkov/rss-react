import { ChangeEvent, useState } from 'react';
import * as yup from 'yup';

const checkboxTermsSchema = yup.object().shape({
  acceptTerms: yup
    .boolean()
    .oneOf([true], 'You must accept the terms and conditions'),
});

interface CheckboxTermsProps {
  checked: boolean;
  onChange: (value: boolean) => void;
}

function CheckboxTerms({ checked, onChange }: CheckboxTermsProps) {
  const [error, setError] = useState<string | undefined>(undefined);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
    setError(undefined);
  };

  const validateCheckbox = async () => {
    try {
      await checkboxTermsSchema.validate(
        { acceptTerms: checked },
        { abortEarly: false }
      );
      setError(undefined);
    } catch (validationError) {
      if (validationError instanceof yup.ValidationError) {
        setError(validationError.errors[0]);
      }
    }
  };

  return (
    <div>
      <label htmlFor="accept-terms">Accept T&C</label>
      <input
        type="checkbox"
        id="accept-terms"
        checked={checked}
        onChange={handleChange}
        onBlur={validateCheckbox}
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

export default CheckboxTerms;
