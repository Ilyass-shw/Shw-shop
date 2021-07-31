import React from 'react';
import CheckoutForm from '../components/Checkout/CheckoutForm/CheckoutForm';
import OrderSummary from '../components/Checkout/OrderSummary/OrderSummary';
import { useWindowWidth } from '../helpers/useWindowWidth';

const Checkout: React.FC = () => {
  const isSmallScreen = useWindowWidth() < 1200;

  return (
    <>
      <OrderSummary isSmallScreen={isSmallScreen} />
      <CheckoutForm isSmallScreen={isSmallScreen} />
    </>
  );
};

export default Checkout;
