import { forwardRef } from 'react';

const PasswordInput = forwardRef<HTMLInputElement>(
  function PasswordInput(props, ref) {
    return (
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          ref={ref}
        />
      </div>
    );
  }
);

export default PasswordInput;
