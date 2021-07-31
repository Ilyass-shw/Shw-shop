import { PayloadAction } from '@reduxjs/toolkit';
import { CartState, initialState } from '../CartSlice';

export const resetCartReducer = (
  _state: CartState,
  _action: PayloadAction,
): CartState => initialState;
