import { RootState } from '../../../../App/store';
import { Item } from '../../../../helpers/types';

export const NecklaceSelector = (state: RootState): Item[] =>
  state.Items.Products.jewelry.Necklace;
