import { RootState } from '../../../../App/store';
import { items } from '../CartSlice';

export const CartItemsSelector = (state: RootState): items[] =>
  state.Cart.items;
