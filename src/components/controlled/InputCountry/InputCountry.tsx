import { useAppSelector } from '../../../redux/redux';

function InputCountry() {
  const { countries } = useAppSelector((state) => state.countries);
  return (
    <div>
      <label htmlFor="country">Choose your country:</label>
      <input list="countries" name="country" id="country" />
      <datalist id="countries">
        {countries.map((country, index) => (
          <option key={index} value={country} />
        ))}
      </datalist>
    </div>
  );
}

export default InputCountry;
