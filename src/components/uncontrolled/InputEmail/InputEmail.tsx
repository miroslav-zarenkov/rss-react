import { forwardRef } from 'react';

const InputEmail = forwardRef<HTMLInputElement>(
  function InputEmail(props, ref) {
    return (
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          ref={ref}
        />
      </div>
    );
  }
);

export default InputEmail;
