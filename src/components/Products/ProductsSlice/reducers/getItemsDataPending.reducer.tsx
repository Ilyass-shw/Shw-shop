import { ProductsState } from '../ProductsSlice';

export const getItemsDataPendingReducer = (state: ProductsState): void => {
  state.FetchStatus = 'Loading';
};
