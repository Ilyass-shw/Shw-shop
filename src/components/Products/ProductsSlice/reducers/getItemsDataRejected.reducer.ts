import { ProductsState } from '../ProductsSlice';

export const getItemsDataRejectedReducer = (state: ProductsState): void => {
  state.FetchStatus = 'failed';
};
