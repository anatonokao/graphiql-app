import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import classes from './AuthForm.module.scss';
import { NavLink } from 'react-router-dom';
import { ref } from 'yup';
import FormField from '@/components/common/FormField.tsx';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  confirmPassword: yup
    .string()
    .oneOf([ref('password')], 'password fields must match')
    .required('confirm password is a required field'),
});
type FormData = {
  email: string;
  password: string;
  confirmPassword?: string;
};
const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data: FormData) => {
    console.log({ data });
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
        sign in
      </button>
      <p className={classes.text}>
        you have an account?
        <NavLink className={classes.link} to="/">
          Login
        </NavLink>
      </p>
    </form>
  );
};

export default AuthForm;
