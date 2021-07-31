import { RootState } from '../../../../App/store';
import { Item } from '../../../../helpers/types';

export const ArmcuffSelector = (state: RootState): Item[] =>
  state.Items.Products.jewelry.Armcuff;
