import store from '../../../../App/store';
import { filterUpdated } from '../ProductsSlice';

describe('filterUpdated', () => {
  it('should update filter', () => {
    expect(store.getState().Items.filter).toStrictEqual('AllJewelry');
    expect(store.getState().Items.filteredList.sort()).toStrictEqual(
      store.getState().Items.Products.jewelry.AllJewelry.sort(),
    );
    store.dispatch(filterUpdated('Bracelet'));
    expect(store.getState().Items.filter).toStrictEqual('Bracelet');
    expect(store.getState().Items.filteredList.sort()).toStrictEqual(
      store.getState().Items.Products.jewelry.Bracelet.sort(),
    );
    store.dispatch(filterUpdated('Earrings'));
    expect(store.getState().Items.filter).toStrictEqual('Earrings');
    expect(store.getState().Items.filteredList.sort()).toStrictEqual(
      store.getState().Items.Products.jewelry.Earrings.sort(),
    );
    store.dispatch(filterUpdated('Armcuff'));
    expect(store.getState().Items.filter).toStrictEqual('Armcuff');
    expect(store.getState().Items.filteredList.sort()).toStrictEqual(
      store.getState().Items.Products.jewelry.Armcuff.sort(),
    );
    store.dispatch(filterUpdated('Necklace'));
    expect(store.getState().Items.filter).toStrictEqual('Necklace');
    expect(store.getState().Items.filteredList.sort()).toStrictEqual(
      store.getState().Items.Products.jewelry.Necklace.sort(),
    );
    store.dispatch(filterUpdated('Ring'));
    expect(store.getState().Items.filter).toStrictEqual('Ring');
    expect(store.getState().Items.filteredList.sort()).toStrictEqual(
      store.getState().Items.Products.jewelry.Ring.sort(),
    );
    store.dispatch(filterUpdated('AllJewelry'));
    expect(store.getState().Items.filter).toStrictEqual('AllJewelry');
    expect(store.getState().Items.filteredList.sort()).toStrictEqual(
      store.getState().Items.Products.jewelry.AllJewelry.sort(),
    );
  });
});
