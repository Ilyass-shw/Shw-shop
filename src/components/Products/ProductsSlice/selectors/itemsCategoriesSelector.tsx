import { RootState } from '../../../../App/store';

export const itemsCategoriesSelector = (state: RootState): string[] =>
  state.Items.categories;
