import React from 'react';
import { useFormContext, RegisterOptions } from 'react-hook-form';

import { Input, FormError } from './RegisteredInput.component';

interface RegisteredInput extends React.InputHTMLAttributes<HTMLInputElement> {
  Name: string;
  registerOptions?: RegisterOptions;
}

const RegisteredInput: React.FC<RegisteredInput> = (props) => {
  const { Name, registerOptions, ...InputProps } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Input
        {...register(Name, registerOptions)}
        isError={errors[Name]}
        {...InputProps}
      />
      <FormError>{errors[Name] && errors[Name].message}</FormError>
    </>
  );
};

export default RegisteredInput;
