import React, { useState } from 'react';
import CheckboxTerms from '../controlled/CheckboxTerms/CheckboxTerms';
import InputAge from '../controlled/InputAge/InputAge';
import InputConfirmPassword from '../controlled/InputConfirmPassword/InputConfirmPassword';
import InputCountry from '../controlled/InputCountry/InputCountry';
import InputEmail from '../controlled/InputEmail/InputEmail';
import InputGender from '../controlled/InputGender/InputGender';
import InputName from '../controlled/InputName/InputName';
import InputPassword from '../controlled/InputPassword/InputPassword';
import InputUploadPicture from '../controlled/InputUploadPicture/InputUploadPicture';
import SubmitButton from '../controlled/SubmitButton/SubmitButton';
import styles from './ControlledForm.module.css';
import { setName } from '../../redux/nameSlice';
import { useNavigate } from 'react-router-dom';
import { setAge } from '../../redux/ageSlice';
import { useAppDispatch } from '../../redux/redux';
import { setEmail } from '../../redux/emailSlice';
import { setGender } from '../../redux/genderSlice';
import { setTerms } from '../../redux/termsSlice';

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    gender: '',
    terms: false,
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(formData.name);
    event.preventDefault();
    dispatch(setName(formData.name));
    dispatch(setAge(formData.age));
    dispatch(setEmail(formData.email));
    dispatch(setGender(formData.gender));
    dispatch(setTerms(formData.terms));
    navigate('/');
  };

  return (
    <form className={styles.form} action="" onSubmit={handleSubmit}>
      <InputName
        value={formData.name}
        onChange={(value: string) => handleChange('name', value)}
      />
      <InputAge
        value={formData.age}
        onChange={(value: string) => handleChange('age', value)}
      />
      <InputEmail
        value={formData.email}
        onChange={(value: string) => handleChange('email', value)}
      />
      <InputPassword />
      <InputConfirmPassword />
      <InputGender
        value={formData.gender}
        onChange={(value: string) => handleChange('gender', value)}
      />
      <CheckboxTerms
        checked={formData.terms}
        onChange={(value: boolean) => handleChange('terms', value)}
      />
      <InputUploadPicture />
      <InputCountry />
      <SubmitButton />
    </form>
  );
};

export default ControlledForm;
