import { RootState } from '../../../../App/store';
import { Item } from '../../../../helpers/types';

export const RingSelector = (state: RootState): Item[] =>
  state.Items.Products.jewelry.Ring;
