import React from 'react';
import { renderWithStore, screen } from '../../../test-utils/testUtils';
import OrderSummary from './OrderSummary';
import store from '../../../App/store';
import { itemAddedToCart } from '../../Cart/CartSlice/CartSlice';
import userEvent from '@testing-library/user-event';

describe('OrderSummary', () => {
  const ProductOne = {
    item: {
      name: 'ProductOne',
      id: 1,
      description: 'rand',
      imgs: ['src1', 'src2', 'src3'],
      price: 45,
    },
    quantity: 85,
    size: 'XS',
  };
  const ProductTwo = {
    item: {
      name: 'ProductTwo',
      id: 2,
      description: 'rand2',
      imgs: ['src4', 'src5', 'src6'],
      price: 455,
    },
    quantity: 55,
    size: 'S',
  };
  const ProductThree = {
    item: {
      name: 'ProductThree',
      id: 3,
      description: 'rand3',
      imgs: ['src7', 'src8', 'src9'],
      price: 4555,
    },
    quantity: 5555,
    size: 'M',
  };

  it('should render', () => {
    renderWithStore(<OrderSummary isSmallScreen={false} />, store);
  });

  it('should match snapshot with empty cart on small devices', () => {
    const { asFragment } = renderWithStore(
      <OrderSummary isSmallScreen={false} />,
      store,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with empty cart on big devices', () => {
    const { asFragment } = renderWithStore(
      <OrderSummary isSmallScreen={true} />,
      store,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with three items in the cart ', () => {
    store.dispatch(itemAddedToCart(ProductOne));
    store.dispatch(itemAddedToCart(ProductTwo));
    store.dispatch(itemAddedToCart(ProductThree));

    const { asFragment } = renderWithStore(
      <OrderSummary isSmallScreen={false} />,
      store,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should not render the toggle button on big screens ', () => {
    renderWithStore(<OrderSummary isSmallScreen={false} />, store);
    expect(screen.queryByText(/Show Order summray/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Hide Order summray/i)).not.toBeInTheDocument();
  });

  it('should render the toggle button on small screens ', () => {
    renderWithStore(<OrderSummary isSmallScreen={true} />, store);
    expect(screen.queryByText(/Show Order summray/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Hide Order summray/i)).toBeInTheDocument();
    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toBeInTheDocument();
  });

  it('should show and hide summary by clicking on the button', () => {
    renderWithStore(<OrderSummary isSmallScreen={true} />, store);
    const toggleButton = screen.getByRole('button');
    expect(screen.getByTestId('cart summary')).toBeVisible();
    userEvent.click(toggleButton);
    expect(screen.getByTestId('cart summary')).not.toBeVisible();
  });
});
