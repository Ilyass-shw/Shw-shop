import React from 'react';
import { useFormContext } from 'react-hook-form';
import {
  CheckboxContainer,
  Checkbox,
  MarketingLabel,
} from './MarketingCheckbox.component';

const MarketingCheckbox: React.FC = () => {
  const { register } = useFormContext();
  return (
    <CheckboxContainer>
      <Checkbox
        {...register('buyerAcceptMarketing')}
        type="checkbox"
        id="buyer-accept-marketing"
      />

      <MarketingLabel htmlFor="buyer-accept-marketing">
        Keep me up to date on news and exclusive offers.
      </MarketingLabel>
    </CheckboxContainer>
  );
};

export default MarketingCheckbox;
