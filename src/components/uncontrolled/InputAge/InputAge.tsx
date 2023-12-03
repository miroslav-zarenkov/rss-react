import { forwardRef } from 'react';

const InputAge = forwardRef<HTMLInputElement>(function InputAge(props, ref) {
  return (
    <div>
      <label htmlFor="age">Age:</label>
      <input type="number" id="age" placeholder="Enter your age" ref={ref} />
    </div>
  );
});

export default InputAge;
