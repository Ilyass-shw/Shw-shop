import store from '../../../../App/store';
import { itemAddedToCart, resetCart, initialState } from '../CartSlice';

describe('reset ', () => {
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

  it('should handle reseting the cart state', () => {
    const unchangedState = store.getState().Cart;
    store.dispatch(itemAddedToCart(ItemOne));
    const changedState = store.getState().Cart;
    expect(changedState).not.toEqual(unchangedState);
    store.dispatch(resetCart());
    const resetState = store.getState().Cart;
    expect(resetState).toEqual(unchangedState);
    expect(resetState).toEqual(initialState);
    expect(resetState).toMatchInlineSnapshot(`
    Object {
      "howManyItems": 0,
      "isBarOpen": false,
      "items": Array [],
    }
  `);
  });
});
