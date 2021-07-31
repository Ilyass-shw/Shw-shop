import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '../components/Cart/CartSlice/CartSlice';
import ProductsReducer from '../components/Products/ProductsSlice/ProductsSlice';

const store = configureStore({
  reducer: {
    Cart: CartReducer,
    Items: ProductsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type realStoreType = typeof store;

export default store;
