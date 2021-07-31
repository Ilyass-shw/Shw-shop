import { RootState } from '../../../../App/store';
import { Item } from '../../../../helpers/types';

export const AllJewellrySelector = (state: RootState): Item[] =>
  state.Items.Products.jewelry.AllJewelry;
