import store from '../../../../App/store';
import { itemAddedToCart, ItemQuantityUpdated } from '../CartSlice';

describe('ItemQuantityUpdated', () => {
  it('should update quantity of the item in Cart', () => {
    const ItemOne = {
      item: {
        name: 'itemOne',
        id: 3,
        description: 'rand',
        imgs: ['src'],
        price: 45,
      },
      quantity: 5,
      size: 'M',
    };
    store.dispatch(itemAddedToCart(ItemOne));
    expect(store.getState().Cart.items).toHaveLength(1);
    expect(store.getState().Cart.items[0].quantity).toEqual(5);
    store.dispatch(ItemQuantityUpdated({ productId: 3, quantity: 10 }));
    expect(store.getState().Cart.items[0].quantity).toEqual(10);
    store.dispatch(ItemQuantityUpdated({ productId: 3, quantity: 200 }));
    expect(store.getState().Cart.items[0].quantity).toEqual(200);
  });
});
