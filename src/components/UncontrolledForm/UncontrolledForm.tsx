import CheckboxTerms from '../CheckboxTerms/CheckboxTerms';
import InputAge from '../InputAge/InputAge';
import InputConfirmPassword from '../InputConfirmPassword/InputConfirmPassword';
import InputCountry from '../InputCountry/InputCountry';
import InputEmail from '../InputEmail/InputEmail';
import InputGender from '../InputGender/InputGender';
import InputName from '../InputName/InputName';
import InputPassword from '../InputPassword/InputPassword';
import InputUploadPicture from '../InputUploadPicture/InputUploadPicture';
import SubmitButton from '../SubmitButton/SubmitButton';

function UncontrolledForm() {
  return (
    <form action="">
      <InputName />
      <InputAge />
      <InputEmail />
      <InputPassword />
      <InputConfirmPassword />
      <InputGender />
      <CheckboxTerms />
      <InputUploadPicture />
      <InputCountry />
      <SubmitButton />
    </form>
  );
}

export default UncontrolledForm;
