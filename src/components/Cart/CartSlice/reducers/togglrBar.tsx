import { CartState } from '../CartSlice';

export const toggleBarReducer = (state: CartState):void => {
  state.isBarOpen = !state.isBarOpen;
};
