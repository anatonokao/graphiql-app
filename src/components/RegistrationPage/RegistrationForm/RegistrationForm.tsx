import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import classes from '@/components/AuthPage/AuthForm/AuthForm.module.scss';
import FormField from '@/components/common/FormField.tsx';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';
import { ref } from 'yup';
import { FormData } from '@/components/AuthPage/AuthForm/AuthForm.tsx';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '@/firebase.tsx';

const schemaRegistration = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  confirmPassword: yup
    .string()
    .oneOf([ref('password')], 'password fields must match')
    .required('confirm password is a required field'),
});

const RegistrationForm = () => {
  const auth = getAuth(app);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schemaRegistration),
  });
  const onSubmitHandler = ({ email, password }: FormData) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
    reset();
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <h2>Create Account</h2>
      <div className={classes.inputs}>
        <FormField
          type={'email'}
          placeholder={'email'}
          register={{ ...register('email') }}
          errors={errors.email}
        />
        <FormField
          type={'password'}
          placeholder={'password'}
          register={{ ...register('password') }}
          errors={errors.password}
        />
        <FormField
          type={'password'}
          placeholder={'confirm password'}
          register={{ ...register('confirmPassword') }}
          errors={errors.confirmPassword}
        />
      </div>
      <button disabled={!isValid} className={classes.button} type="submit">
        register
      </button>
      <p className={classes.text}>
        you have an account?
        <NavLink className={classes.link} to="/auth">
          Login
        </NavLink>
      </p>
    </form>
  );
};

export default RegistrationForm;
