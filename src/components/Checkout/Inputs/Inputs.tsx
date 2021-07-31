import React from 'react';
import CountrySelect from '../CountrySelect/CountrySelect';
import MarketingCheckbox from '../MarketingCheckbox/MarketingCheckbox';
import RegisteredInput from '../RegisteredInput/RegisteredInput';

import { MainLabel } from './Inputs.component';

const Inputs: React.FC = () => {
  return (
    <>
      <RegisteredInput
        Name="email"
        registerOptions={{
          required: 'This is required.',
          validate: (value) =>
            value.includes('@') || 'Please enter a valid email Address.',
        }}
        type="email"
        placeholder="Email"
        autoCapitalize="off"
        spellCheck="false"
        autoComplete="email"
      />

      <MarketingCheckbox />

      <MainLabel>Shipping address</MainLabel>

      <RegisteredInput
        Name="FirstName"
        registerOptions={{ required: 'This is required.' }}
        type="text"
        placeholder="First name"
        autoCapitalize="off"
        spellCheck="false"
        autoComplete="given-name"
        autoCorrect="off"
      />
      <RegisteredInput
        Name="LastName"
        registerOptions={{ required: 'This is required.' }}
        type="text"
        placeholder="Last name"
        autoCapitalize="off"
        spellCheck="false"
        autoComplete="family-name"
        autoCorrect="off"
      />
      <RegisteredInput
        Name="Address"
        registerOptions={{ required: 'This is required.' }}
        type="text"
        placeholder="Address"
        autoCapitalize="off"
        spellCheck="false"
        autoComplete="address-line1"
        autoCorrect="off"
      />
      <RegisteredInput
        Name="Address2"
        type="text"
        placeholder="Apartment, suite, etc. (optional)"
        autoCapitalize="off"
        spellCheck="false"
        autoComplete="address-line2"
        autoCorrect="off"
      />
      <RegisteredInput
        Name="City"
        registerOptions={{ required: 'This is required.' }}
        type="text"
        placeholder="City"
        autoComplete="address-level2"
        autoCorrect="off"
      />
      <CountrySelect />
      <RegisteredInput
        Name="PhoneNumber"
        registerOptions={{
          required: 'This is required.',
          pattern: { value: /^[0-9]+$/, message: 'Numbers only, please.' },
        }}
        type="tel"
        placeholder="Phone"
        autoComplete="tel"
        autoCorrect="off"
      />
    </>
  );
};

export default Inputs;
