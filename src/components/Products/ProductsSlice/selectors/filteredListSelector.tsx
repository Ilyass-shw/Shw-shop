import { RootState } from '../../../../App/store';
import { Item } from '../../../../helpers/types';

export const filteredListSelector = (state: RootState): Item[] =>
  state.Items.filteredList;
