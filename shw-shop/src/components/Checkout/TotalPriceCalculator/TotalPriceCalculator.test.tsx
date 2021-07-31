import React from 'react';
import { render } from '../../../test-utils/testUtils';
import TotalPriceCalculator from './TotalPriceCalculator';
describe('TotalPriceCalculator', () => {
  const CartTotalPrice = 56;
  const taxes = 2;
  const TotalToPay = 50;
  it('should render', () => {
    render(
      <TotalPriceCalculator
        CartTotalPrice={CartTotalPrice}
        taxes={taxes}
        TotalToPay={TotalToPay}
      />,
    );
  });
  it('should match snapshot', () => {
    const { asFragment } = render(
      <TotalPriceCalculator
        CartTotalPrice={CartTotalPrice}
        taxes={taxes}
        TotalToPay={TotalToPay}
      />,
    );
    expect(asFragment).toMatchSnapshot();
  });
});
