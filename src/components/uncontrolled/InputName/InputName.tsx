import { forwardRef } from 'react';

const InputName = forwardRef<HTMLInputElement>(function InputName(props, ref) {
  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" placeholder="Enter your name" ref={ref} />
    </div>
  );
});

export default InputName;
