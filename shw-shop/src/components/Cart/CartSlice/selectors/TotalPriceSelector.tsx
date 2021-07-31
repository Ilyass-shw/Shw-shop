import { RootState } from '../../../../App/store';

export const TotalPriceSelector = (state: RootState): number => {
  let total = 0;
  state.Cart.items.forEach(
    (product) => (total = total + product.item.price * product.quantity),
  );
  return total;
};
