import { waitFor } from '@testing-library/dom';
import store from '../../../../App/store';
import { getProductsData } from '../../../Products/ProductsSlice/ProductsSlice';
import { itemAddedToCart } from '../CartSlice';

describe('itemAddedReducer', () => {
  it('should handle adding item', async () => {
    expect(store.getState().Cart.items).toHaveLength(0);
    expect(store.getState().Cart.howManyItems).toEqual(0);
    await waitFor(() => {
      store.dispatch(getProductsData());
      expect(
        store.getState().Items.Products.jewelry.AllJewelry,
      ).not.toHaveLength(0);
    });
    const itemToAdd = {
      item: store.getState().Items.Products.jewelry.AllJewelry[0],
      quantity: 5,
      size: 'XL',
    };
    store.dispatch(itemAddedToCart(itemToAdd));
    expect(store.getState().Cart.items).toHaveLength(1);
    expect(store.getState().Cart.items[0]).toBe(itemToAdd);
    expect(store.getState().Cart.howManyItems).toEqual(1);
    store.dispatch(itemAddedToCart(itemToAdd));
    expect(store.getState().Cart.items).toHaveLength(1);
    expect(store.getState().Cart.items[0]).toBe(itemToAdd);
    expect(store.getState().Cart.howManyItems).toEqual(1);
  });
});
