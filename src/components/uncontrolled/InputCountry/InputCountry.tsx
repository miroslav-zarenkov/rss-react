function InputCountry() {
  return (
    <div>
      <label htmlFor="country">Choose your country:</label>
      <input list="countries" name="country" id="country" />
      <datalist id="countries">
        <option value="USA" />
        <option value="France" />
        <option value="Poland" />
        <option value="Argentina" />
        <option value="China" />
      </datalist>
    </div>
  );
}

export default InputCountry;
