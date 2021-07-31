import store from '../../../../App/store';
import { filter } from '../../ProductsSlice/ProductsSlice';
import { filterUpdated } from '../../ProductsSlice/ProductsSlice';

export const updateFilter = (Filter: filter): void => {
  store.dispatch(filterUpdated(Filter));
};
