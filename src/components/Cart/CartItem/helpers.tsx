import store from '../../../App/store';
import {
  itemDeletedFromCart,
  ItemQuantityUpdated,
} from '../CartSlice/CartSlice';

export const DeleteItem = (id: number): void => {
  store.dispatch(itemDeletedFromCart(id));
};
export const UpdateItemQuantity = (
  productId: number,
  quantity: number,
): void => {
  store.dispatch(ItemQuantityUpdated({ productId, quantity }));
};
