import { PayloadAction } from '@reduxjs/toolkit';
import { CartState, items } from '../CartSlice';

export const itemAddedReducer = (
  state: CartState,
  action: PayloadAction<items>,
): void => {
  const isInListAlready = state.items.find(
    (item) => item.item.id === action.payload.item.id,
  );

  if (!isInListAlready) {
    state.items.push(action.payload);
    state.howManyItems++;
  }
};
