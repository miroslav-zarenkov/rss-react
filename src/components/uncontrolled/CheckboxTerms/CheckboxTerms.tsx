import { forwardRef } from 'react';

const CheckboxTerms = forwardRef<HTMLInputElement>(
  function CheckboxTerms(props, ref) {
    return (
      <div>
        <label htmlFor="accept-terms">Accept T&C</label>
        <input type="checkbox" id="accept-terms" name="scales" ref={ref} />
      </div>
    );
  }
);

export default CheckboxTerms;
