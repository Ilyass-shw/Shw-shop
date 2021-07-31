import React from 'react';

import {
  ToggleButton,
  ButtonContent,
  ButtonHeader,
  TotalPrice,
} from './SummaryToggleButton.component';

interface SummaryToggleButtonProps {
  show: boolean;
  clickHandle: React.Dispatch<React.SetStateAction<boolean>>;
  TotalToPay: number;
}
const SummaryToggleButton: React.FC<SummaryToggleButtonProps> = ({
  show,
  clickHandle,
  TotalToPay,
}) => {
  return (
    <ToggleButton onClick={() => clickHandle(!show)} role="button">
      <ButtonContent>
        <ButtonHeader show={show}>
          {show ? 'Show Order summray' : 'Hide Order summray'}
        </ButtonHeader>
        <TotalPrice> {'$' + TotalToPay.toFixed(2)}</TotalPrice>
      </ButtonContent>
    </ToggleButton>
  );
};

export default SummaryToggleButton;
