import { forwardRef } from 'react';

const InputConfirmPassword = forwardRef<HTMLInputElement>(
  function InputConfirmPassword(props, ref) {
    return (
      <div>
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Confirm your password"
          ref={ref}
        />
      </div>
    );
  }
);

export default InputConfirmPassword;
