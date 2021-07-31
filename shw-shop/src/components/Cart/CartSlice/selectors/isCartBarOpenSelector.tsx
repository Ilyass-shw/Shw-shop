import { RootState } from '../../../../App/store';

export const isCartBarOpenSelector = (state: RootState): boolean =>
  state.Cart.isBarOpen;
