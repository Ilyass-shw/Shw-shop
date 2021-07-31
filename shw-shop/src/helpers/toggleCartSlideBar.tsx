import store from '../App/store';
import { toggleBar } from '../components/Cart/CartSlice/CartSlice';

export const toggleCartSlideBar = (): void => {
  store.dispatch(toggleBar());
};
