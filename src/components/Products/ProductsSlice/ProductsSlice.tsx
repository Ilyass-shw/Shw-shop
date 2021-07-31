import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Item, categories, DataItem } from '../../../helpers/types';
import { filterUpdatedReducer } from './reducers/filterUpdated.reducer';
import { getProductsDataFulfilledReducer } from './reducers/getItemsDataFulfilled.reducer';
import { getItemsDataPendingReducer } from './reducers/getItemsDataPending.reducer';
import { getItemsDataRejectedReducer } from './reducers/getItemsDataRejected.reducer';

export const getProductsData = createAsyncThunk<{
  data: DataItem[];
  categories: categories[];
}>('Products/getItemData', async () => {
  const res = await fetch('https://ShopData', {
    method: 'GET',

    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { data } = await res.json();
  return {
    data,
    categories: ['Armcuff', 'Ring', 'Bracelet', 'Earrings', 'Necklace'],
  };
});

type fetchStatus = 'Loading' | 'succeeded' | 'failed' | 'idle';

export type filter = categories | 'AllJewelry';

interface jewelryLists {
  AllJewelry: Item[];
  Armcuff: Item[];
  Ring: Item[];
  Bracelet: Item[];
  Earrings: Item[];
  Necklace: Item[];
}

export interface ProductsState {
  Products: { jewelry: jewelryLists };
  FetchStatus: fetchStatus;
  categories: categories[];
  filter: filter;
  filteredList: Item[];
}
const initialState: ProductsState = {
  Products: {
    jewelry: {
      AllJewelry: [],
      Armcuff: [],
      Ring: [],
      Bracelet: [],
      Earrings: [],
      Necklace: [],
    },
  },
  FetchStatus: 'idle',
  categories: [],
  filter: 'AllJewelry',
  filteredList: [],
};

export const Products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterUpdated: filterUpdatedReducer,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsData.pending, getItemsDataPendingReducer)
      .addCase(getProductsData.fulfilled, getProductsDataFulfilledReducer)
      .addCase(getProductsData.rejected, getItemsDataRejectedReducer);
  },
});

export const { filterUpdated } = Products.actions;

export default Products.reducer;
