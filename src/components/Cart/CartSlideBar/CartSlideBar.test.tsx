import React from 'react';
import {
  renderWithStore,
  screen,
  waitFor,
} from '../../../test-utils/testUtils';
import userEvent from '@testing-library/user-event';
import CartBar from './CartSlideBar';
import store from '../../../App/store';
import { toggleCartSlideBar } from '../../../helpers/toggleCartSlideBar';
import { itemAddedToCart } from '../CartSlice/CartSlice';

describe('CartBar', () => {
  it('should render', () => {
    renderWithStore(<CartBar />, store, 'withRouter');
  });

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

  it('should display the right data of cart items.', () => {
    store.dispatch(itemAddedToCart(ProductOne));
    const { asFragment } = renderWithStore(<CartBar />, store, 'withRouter');
    expect(asFragment()).toMatchSnapshot();
    store.dispatch(itemAddedToCart(ProductTwo));
    expect(asFragment()).toMatchSnapshot();
    store.dispatch(itemAddedToCart(ProductThree));
    expect(asFragment()).toMatchSnapshot();
  });

  it('should handle deleting items from cart.', async () => {
    renderWithStore(<CartBar />, store, 'withRouter');
    expect(screen.queryByText(/ProductOne/i)).toBeInTheDocument();
    expect(screen.queryByText(/ProductTwo/i)).toBeInTheDocument();
    expect(screen.queryByText(/ProductThree/i)).toBeInTheDocument();
    const removeButtons = screen.getAllByText(/remove/i);
    userEvent.click(removeButtons[0]);
    expect(screen.queryByText(/ProductOne/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/ProductTwo/i)).toBeInTheDocument();
    expect(screen.queryByText(/ProductThree/i)).toBeInTheDocument();
    userEvent.click(removeButtons[1]);
    expect(screen.queryByText(/ProductOne/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/ProductTwo/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/ProductThree/i)).toBeInTheDocument();
    userEvent.click(removeButtons[2]);
    expect(screen.queryByText(/ProductOne/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/ProductTwo/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/ProductThree/i)).not.toBeInTheDocument();
  });

  it('should close when clicked on close button', async () => {
    renderWithStore(<CartBar />, store, 'withRouter');
    const closeButton = screen.getByTestId('cart-slide-bar-closeButton');
    const cartBar = screen.getByTestId('cart-slide-bar');

    expect(cartBar).not.toBeVisible();
    expect(store.getState().Cart.isBarOpen).toBeFalsy();

    toggleCartSlideBar();

    expect(cartBar).toBeVisible();
    expect(store.getState().Cart.isBarOpen).toBeTruthy();

    userEvent.click(closeButton);

    await waitFor(() => {
      expect(cartBar).not.toBeVisible();
      expect(store.getState().Cart.isBarOpen).toBeFalsy();
    });
  });

  it('should close when clicked on the dark background', async () => {
    renderWithStore(<CartBar />, store, 'withRouter');
    const cartBar = screen.getByTestId('cart-slide-bar');

    expect(cartBar).not.toBeVisible();
    expect(store.getState().Cart.isBarOpen).toBeFalsy();

    toggleCartSlideBar();

    expect(cartBar).toBeVisible();
    expect(store.getState().Cart.isBarOpen).toBeTruthy();

    const Background = screen.getByTestId('cart-slide-bar-background');

    userEvent.click(Background);

    await waitFor(() => {
      expect(cartBar).not.toBeVisible();
    });
  });
});
