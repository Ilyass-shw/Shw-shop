import { RootState } from '../../../../App/store';
import { Item } from '../../../../helpers/types';

export const BraceletSelector = (state: RootState): Item[] =>
  state.Items.Products.jewelry.Bracelet;
