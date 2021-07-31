import store from '../../../App/store';
import { Item } from '../../../helpers/types';
import {
  itemAddedToCart,
  itemDeletedFromCart,
} from '../../Cart/CartSlice/CartSlice';

export const AddToCart = (
  item: Item,
  itemSize: string,
  quantity: number,
): void => {
  store.dispatch(itemDeletedFromCart(item.id));
  store.dispatch(itemAddedToCart({ item, size: itemSize, quantity }));
};
