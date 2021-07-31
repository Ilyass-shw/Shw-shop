import { PayloadAction } from '@reduxjs/toolkit';
import { CartState } from '../CartSlice';

type ItemQuantityUpdatedProps = {
  productId: number;
  quantity: number;
};
export const ItemQuantityUpdatedReducer = (
  state: CartState,
  action: PayloadAction<ItemQuantityUpdatedProps>,
): void => {
  const item = state.items.find(
    (product) => product.item.id === action.payload.productId,
  );
  if (item) {
    item.quantity = action.payload.quantity;
  }
};
