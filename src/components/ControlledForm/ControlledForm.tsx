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
import { setName } from '../../redux/nameSliceControlled';
import { useNavigate } from 'react-router-dom';
import { setAge } from '../../redux/ageSliceControlled';
import { useAppDispatch } from '../../redux/redux';
import { setEmail } from '../../redux/emailSliceControlled';
import { setGender } from '../../redux/genderSliceControlled';
import { setTerms } from '../../redux/termsSliceControlled';

import * as yup from 'yup';

const controlledFormSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[A-Z][a-z]*$/, 'Name must start with an uppercase letter'),
  age: yup
    .number()
    .positive('Age must be a positive number')
    .integer('Age must be an integer')
    .required('Age is required'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email address'),
  gender: yup.string().required('Gender is required'),
  terms: yup
    .boolean()
    .oneOf([true], 'You must accept the terms and conditions'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    gender: '',
    terms: false,
    password: '',
    confirmPassword: '',
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
  const isValid = controlledFormSchema.isValidSync(formData);
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
      <InputPassword
        value={formData.password}
        onChange={(value: string) => handleChange('password', value)}
      />
      <InputConfirmPassword
        value={formData.confirmPassword}
        password={formData.password}
        onChange={(value: string) => handleChange('confirmPassword', value)}
      />
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
      <SubmitButton disabled={!isValid} />
    </form>
  );
};

export default ControlledForm;
