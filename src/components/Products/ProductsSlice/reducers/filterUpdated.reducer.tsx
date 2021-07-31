import { ProductsState, filter } from '../ProductsSlice';
import { PayloadAction } from '@reduxjs/toolkit';

export const filterUpdatedReducer = (
  state: ProductsState,
  action: PayloadAction<filter>,
): void => {
  state.filter = action.payload;
  state.filteredList = state.Products.jewelry[state.filter];
};
