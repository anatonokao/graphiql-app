import React from 'react';
import classes from '@/components/AuthPage/AuthForm/AuthForm.module.scss';
import { FieldError } from 'react-hook-form';

const FormField = ({
  register,
  errors,
  placeholder,
  type,
}: {
  register: object;
  errors: FieldError | undefined;
  placeholder: string;
  type: string;
}) => {
  return (
    <label className={classes.label}>
      <input
        className={`${classes.input} ${errors && classes.inputInvalid}`}
        {...register}
        placeholder={placeholder}
        type={type}
      />
      {errors && <p className={classes.error}>{errors?.message}</p>}
    </label>
  );
};

export default FormField;
