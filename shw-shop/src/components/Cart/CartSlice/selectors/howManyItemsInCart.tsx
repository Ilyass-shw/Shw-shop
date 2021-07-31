import { RootState } from '../../../../App/store';

export const howManyItemsInCart = (state: RootState): number =>
  state.Cart.howManyItems;
