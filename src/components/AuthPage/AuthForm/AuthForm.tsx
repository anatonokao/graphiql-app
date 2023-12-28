import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import classes from './AuthForm.module.scss';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});
type FormData = {
  email: string;
  password: string;
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
    <div className={classes.container}>
      <h2>Create Account</h2>
      <form className={classes.form} onSubmit={handleSubmit(onSubmitHandler)}>
        <label className={classes.label}>
          <input
            className={classes.input}
            {...register('email')}
            placeholder="email"
          />
          {errors.email && (
            <p className={classes.error}>{errors.email?.message}</p>
          )}
        </label>
        <label className={classes.label}>
          <input
            className={classes.input}
            {...register('password')}
            placeholder="password"
            type="password"
          />
          <p className={classes.error}>{errors.password?.message}</p>
        </label>
        <button disabled={!isValid} className={classes.button} type="submit">
          sign in
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
