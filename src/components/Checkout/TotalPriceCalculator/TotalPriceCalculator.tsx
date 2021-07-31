import React from 'react';
import {
  PriceCalculator,
  CalculatorBlock,
  Label,
  Price,
  UntilNextStep,
  Total,
  TotalLabel,
  TotalPrice,
} from './TotalPriceCalculator.component';

interface TotalPriceCalculatorProps {
  CartTotalPrice: number;
  taxes: number;
  TotalToPay: number;
}
const TotalPriceCalculator: React.FC<TotalPriceCalculatorProps> = ({
  CartTotalPrice,
  taxes,
  TotalToPay,
}) => {
  return (
    <>
      <PriceCalculator>
        <CalculatorBlock>
          <Label>Subtotal</Label>
          <Price>{'$' + CartTotalPrice.toFixed(2)}</Price>
        </CalculatorBlock>
        <CalculatorBlock>
          <Label>Shipping</Label>
          <UntilNextStep>Calculated at next step</UntilNextStep>
        </CalculatorBlock>
        <CalculatorBlock>
          <Label>Taxes (estimated)</Label>
          <Price>{'$' + taxes.toFixed(2)}</Price>
        </CalculatorBlock>
      </PriceCalculator>
      <Total>
        <TotalLabel>Total</TotalLabel>
        <TotalPrice>{'$' + TotalToPay.toFixed(2)}</TotalPrice>
      </Total>
    </>
  );
};

export default TotalPriceCalculator;
