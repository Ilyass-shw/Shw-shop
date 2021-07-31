import React from 'react';
import {
  renderWithStore,
  screen,
} from '../../../test-utils/testUtils';
import Cart from './CartIcon';
import store from '../../../App/store';
import { itemAddedToCart } from '../CartSlice/CartSlice';

describe('CartIcon', () => {
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
    renderWithStore(<Cart />, store);
  });

  it('should match snapshot', () => {
    const { asFragment } = renderWithStore(<Cart />, store);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display number of items in the cart when there are any', () => {
    renderWithStore(<Cart />, store);
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
    store.dispatch(itemAddedToCart(ProductOne));
    expect(screen.getByRole('heading', { name: /1/i })).toBeInTheDocument();
    store.dispatch(itemAddedToCart(ProductOne));
    store.dispatch(itemAddedToCart(ProductTwo));
    expect(screen.getByRole('heading', { name: /2/i })).toBeInTheDocument();
    store.dispatch(itemAddedToCart(ProductThree));
    expect(screen.getByRole('heading', { name: /3/i })).toBeInTheDocument();
  });
});
