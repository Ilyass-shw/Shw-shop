import { RootState } from '../../../../App/store';
import { Item } from '../../../../helpers/types';

export const EarringsSelector = (state: RootState): Item[] =>
  state.Items.Products.jewelry.Earrings;
