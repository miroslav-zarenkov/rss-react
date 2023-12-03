import React, { forwardRef, useRef, useState } from 'react';
import CheckboxTerms from '../uncontrolled/CheckboxTerms/CheckboxTerms';
import InputAge from '../uncontrolled/InputAge/InputAge';
import InputConfirmPassword from '../uncontrolled/InputConfirmPassword/InputConfirmPassword';
import InputCountry from '../uncontrolled/InputCountry/InputCountry';
import InputEmail from '../uncontrolled/InputEmail/InputEmail';
import InputGender from '../uncontrolled/InputGender/InputGender';
import InputName from '../uncontrolled/InputName/InputName';
import InputPassword from '../uncontrolled/InputPassword/InputPassword';
import InputUploadPicture from '../uncontrolled/InputUploadPicture/InputUploadPicture';
import SubmitButton from '../uncontrolled/SubmitButton/SubmitButton';
import styles from './UncontrolledForm.module.css';
import { setName } from '../../redux/nameSlice';
import { useNavigate } from 'react-router-dom';
import { setAge } from '../../redux/ageSlice';
import { useAppDispatch } from '../../redux/redux';
import { setEmail } from '../../redux/emailSlice';
import { setGender } from '../../redux/genderSlice';
import { setTerms } from '../../redux/termsSlice';

import * as yup from 'yup';

const uncontrolledFormSchema = yup.object().shape({
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

type Errors = {
  name: string;
  age: string;
  email: string;
  gender: string;
  terms: string;
  password: string;
  confirmPassword: string;
};

const UncontrolledForm = forwardRef(function UncontrolledForm() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const ageRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const termsRef = useRef<HTMLInputElement | null>(null);
  const genderRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [errors, setErrors] = useState<Errors>({
    name: '',
    age: '',
    email: '',
    gender: '',
    terms: '',
    password: '',
    confirmPassword: '',
  });

  const validateForm = async () => {
    try {
      await uncontrolledFormSchema.validate(
        {
          name: nameRef.current?.value || '',
          age: ageRef.current?.value || '',
          email: emailRef.current?.value || '',
          gender: genderRef.current?.value || '',
          terms: termsRef.current?.checked || false,
          password: passwordRef.current?.value || '',
          confirmPassword: confirmPasswordRef.current?.value || '',
        },
        { abortEarly: false }
      );
      setErrors({
        name: '',
        age: '',
        email: '',
        gender: '',
        terms: '',
        password: '',
        confirmPassword: '',
      });
      return true;
    } catch (err) {
      const validationErrors: Errors = {
        name: '',
        age: '',
        email: '',
        gender: '',
        terms: '',
        password: '',
        confirmPassword: '',
      };
      if (err instanceof yup.ValidationError) {
        err.inner.forEach((error) => {
          if (error.path) {
            const key = error.path as keyof Errors;
            validationErrors[key] = error.message;
          }
        });
      }
      setErrors(validationErrors);
      return false;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = await validateForm();

    if (isValid) {
      const genderValue = genderRef.current?.checked ? 'Male' : 'Female';
      dispatch(setName(nameRef.current?.value || ''));
      dispatch(setAge(ageRef.current?.value || ''));
      dispatch(setEmail(emailRef.current?.value || ''));
      dispatch(setGender(genderValue));
      dispatch(setTerms(termsRef.current?.checked || false));
      navigate('/');
    }
  };

  return (
    <form className={styles.form} action="" onSubmit={handleSubmit}>
      <InputName ref={nameRef} />
      {!errors.name && (
        <div style={{ display: 'hidden', height: '20px' }}>{errors.name}</div>
      )}
      {errors.name && (
        <div style={{ color: 'red', display: 'block', height: '20px' }}>
          {errors.name}
        </div>
      )}
      <InputAge ref={ageRef} />
      {!errors.age && (
        <div style={{ display: 'hidden', height: '20px' }}>{errors.email}</div>
      )}
      {errors.age && (
        <div style={{ color: 'red', display: 'block', height: '20px' }}>
          {errors.age}
        </div>
      )}
      <InputEmail ref={emailRef} />
      {!errors.email && (
        <div style={{ display: 'hidden', height: '20px' }}>{errors.email}</div>
      )}
      {errors.email && (
        <div style={{ color: 'red', display: 'block', height: '20px' }}>
          {errors.email}
        </div>
      )}
      <InputPassword ref={passwordRef} />
      {!errors.password && (
        <div style={{ display: 'hidden', height: '20px' }}>
          {errors.password}
        </div>
      )}
      {errors.password && (
        <div style={{ color: 'red', display: 'block', height: '20px' }}>
          {errors.password}
        </div>
      )}
      <InputConfirmPassword ref={confirmPasswordRef} />
      {!errors.confirmPassword && (
        <div style={{ display: 'hidden', height: '20px' }}>
          {errors.confirmPassword}
        </div>
      )}
      {errors.confirmPassword && (
        <div style={{ color: 'red', display: 'block', height: '20px' }}>
          {errors.confirmPassword}
        </div>
      )}
      <InputGender ref={genderRef} />
      {!errors.gender && (
        <div style={{ display: 'hidden', height: '20px' }}>{errors.gender}</div>
      )}
      {errors.gender && (
        <div style={{ color: 'red', display: 'block', height: '20px' }}>
          {errors.gender}
        </div>
      )}
      <CheckboxTerms ref={termsRef} />
      {!errors.terms && (
        <div style={{ display: 'hidden', height: '20px' }}>{errors.terms}</div>
      )}
      {errors.terms && (
        <div style={{ color: 'red', display: 'block', height: '20px' }}>
          {errors.terms}
        </div>
      )}
      <InputUploadPicture />
      <InputCountry />
      <SubmitButton />
    </form>
  );
});

export default UncontrolledForm;
