import React from 'react';

const InputGender = React.forwardRef<HTMLInputElement>(
  function InputGender(props, ref) {
    return (
      <div>
        <label>Gender:</label>
        <input type="radio" id="male" name="gender" value="Male" ref={ref} />
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="gender" value="Female" />
        <label htmlFor="female">Female</label>
      </div>
    );
  }
);

export default InputGender;
