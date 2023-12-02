function InputGender() {
  return (
    <div>
      <label>Gender:</label>
      <input type="radio" id="male" name="contact" value="Male" />
      <label htmlFor="male">Male</label>
      <input type="radio" id="female" name="contact" value="Female" />
      <label htmlFor="female">Female</label>
    </div>
  );
}

export default InputGender;
