import React from 'react';
import { render } from '../../../test-utils/testUtils';
import ProductDetais from './ProductDetails';

describe('ProductDetais', () => {
  const Item = {
    name: 'itemOne',
    id: 1,
    description: 'rand',
    imgs: ['src'],
    price: 45,
  };
  it('should render', () => {
    render(<ProductDetais item={Item} />);
  });
  it('should match snapshot', () => {
    const { asFragment } = render(<ProductDetais item={Item} />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <h2
          class="sc-bdvvaa jfyiLU"
        >
          itemOne
        </h2>
        <h3
          class="sc-gsDJrp fFSThw"
        >
          45$
        </h3>
        <p
          class="sc-dkPtyc jjMmBK"
        >
          "rand"
        </p>
      </DocumentFragment>
    `);
  });
});
