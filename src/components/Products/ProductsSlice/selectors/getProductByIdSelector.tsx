import { RootState } from '../../../../App/store';
import { Item } from '../../../../helpers/types';

export const getProductByIdSelector = (productId: number) => (
  state: RootState,
): Item | undefined =>
  state.Items.Products.jewelry.AllJewelry.find((item) => item.id === productId);
