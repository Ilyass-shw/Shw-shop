import React from 'react';
import { renderWithRouter } from '../../../test-utils/testUtils';
import Product from './Product';
// import ProductImgs from '../ProductImgs/ProductImgs';

describe('Product', () => {

  const Item = {
    name: 'itemOne',
    id: 1,
    description: 'rand',
    imgs: ['src1', 'src2', 'src3'],
    price: 45,
  };

  it('should render', () => {
    renderWithRouter(<Product item={Item} />);
  });
  it('should match snaptshot', () => {
    const { asFragment } = renderWithRouter(<Product item={Item} />);
    expect(asFragment()).toMatchSnapshot();
  });
//   it('should render ProductImgs with the right isOnHover prop ', () => {
//     // ProductImgs = jest.fn()
//     renderWithRouter(<Product item={Item} />);
//     // const productImgs = screen.getByTestId('productImgs');
//     expect(ProductImgs).toHaveBeenCalledWith('imgs', Item.imgs);
//     expect(ProductImgs).toHaveBeenCalledWith('isOnHover', false);
//     expect(ProductImgs).toHaveBeenCalledWith('isVisible', false);
//   });
});
