import React from 'react';
import store from '../../App/store';
import { renderWithStore, screen } from '../../test-utils/testUtils';
import NavBar from './NavBar';
import userEvent from '@testing-library/user-event';

describe('NavBar', () => {
  it('should render', () => {
    renderWithStore(<NavBar />, store, 'withRouter');

    const Logo = screen.getByText('Shw');
    const ShopLink = screen.getByText('Shop');

    expect(Logo).toBeInTheDocument();
    expect(ShopLink).toBeInTheDocument();
  });

  it('should open and close cart items bar using the cart icon button', async () => {
    renderWithStore(<NavBar />, store, 'withRouter');

    const cartBar = screen.getByTestId('cart-slide-bar');

    expect(cartBar).not.toBeVisible();
    expect(store.getState().Cart.isBarOpen).toBeFalsy();

    const icon = screen.getByTestId('cart-icon');
    userEvent.click(icon);

    expect(store.getState().Cart.isBarOpen).toBeTruthy();
    expect(cartBar).toBeVisible();

    const closeButton = screen.getByTestId('cart-slide-bar-closeButton');
    userEvent.click(closeButton);

    expect(cartBar).not.toBeVisible();
    expect(store.getState().Cart.isBarOpen).toBeFalsy();
  });
});
