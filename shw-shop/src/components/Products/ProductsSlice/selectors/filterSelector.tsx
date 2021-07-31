import { RootState } from '../../../../App/store';
import { filter } from '../ProductsSlice';

export const filterSelector = (state: RootState): filter =>
  state.Items.filter;
