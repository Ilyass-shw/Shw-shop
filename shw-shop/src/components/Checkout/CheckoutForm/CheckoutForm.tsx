import React from 'react';
import Inputs from '../Inputs/Inputs';
import { FormProvider, useForm } from 'react-hook-form';
import { handleData } from './helpers.tsx/handleData';
import { formValue } from './helpers.tsx/types';

import {
  Logo,
  FormContainer,
  Form,
  MainLabel,
  SignIn,
  Link,
  SubmitButton,
  ReturnLink,
} from './CheckoutForm.component';

interface CheckoutFormProps {
  saveData?: (dataToSave: formValue) => void;
  isSmallScreen: boolean;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  saveData,
  isSmallScreen,
}) => {
  const methods = useForm<formValue>();

  return (
    <>
      {!isSmallScreen && <Logo to="/">Shw</Logo>}
      <FormProvider {...methods}>
        <FormContainer>
          <Form
            onSubmit={methods.handleSubmit((data) =>
              handleData(data, saveData),
            )}
          >
            <MainLabel>Contact information</MainLabel>
            <SignIn>
              Already have an account?
              <Link href=""> Log in</Link>
            </SignIn>
            <Inputs />

            <SubmitButton type="submit">Continue to shipping</SubmitButton>
            <ReturnLink to="/">Return to cart</ReturnLink>
          </Form>
        </FormContainer>
      </FormProvider>
    </>
  );
};

export default CheckoutForm;
