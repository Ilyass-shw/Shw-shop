import { PayloadAction } from '@reduxjs/toolkit';
import { CartState } from '../CartSlice';

export const itemDeletedReducer = (
  state: CartState,
  action: PayloadAction<number>,
): void => {
  const index = state.items.findIndex(
    (product) => product.item.id === action.payload,
  );
  if(index!==(-1)){
    state.items.splice(index, 1);
    if (state.howManyItems > 0) {
      state.howManyItems--;
    }
  }
  
};
