import React from 'react';
import { render } from '../../../test-utils/testUtils';
import CartItem from './CartItem';

describe('CartItem', () => {
  const Item = {
    item: {
      name: 'itemOne',
      id: 1,
      description: 'rand',
      imgs: ['src'],
      price: 45,
    },
    quantity: 5,
    size: 'M',
  };

  it('should render', () => {
    render(<CartItem product={Item} />);
  });
  it('should match snapshot', () => {
    const { asFragment } = render(<CartItem product={Item} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
