import { forwardRef, useRef } from 'react';
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
import styles from './UncontrolledForm.module.css';
import { setName } from '../../redux/nameSlice';
import { useNavigate } from 'react-router-dom';
import { setAge } from '../../redux/ageSlice';
import { useAppDispatch } from '../../redux/redux';
import { setEmail } from '../../redux/emailSlice';
import { setGender } from '../../redux/genderSlice';
import { setTerms } from '../../redux/termsSlice';

const UncontrolledForm = forwardRef(function UncontrolledForm() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const ageRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const termsRef = useRef<HTMLInputElement | null>(null);
  const genderRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const genderValue = genderRef.current?.checked ? 'Male' : 'Female';
    dispatch(setName(nameRef.current?.value || ''));
    dispatch(setAge(ageRef.current?.value || ''));
    dispatch(setEmail(emailRef.current?.value || ''));
    dispatch(setGender(genderValue));
    dispatch(setTerms(termsRef.current?.checked || false));
    navigate('/');
  };

  return (
    <form className={styles.form} action="" onSubmit={handleSubmit}>
      <InputName ref={nameRef} />
      <InputAge ref={ageRef} />
      <InputEmail ref={emailRef} />
      <InputPassword />
      <InputConfirmPassword />
      <InputGender ref={genderRef} />
      <CheckboxTerms ref={termsRef} />
      <InputUploadPicture />
      <InputCountry />
      <SubmitButton />
    </form>
  );
});

export default UncontrolledForm;
