import store from '../../../../App/store';
import { toggleBar } from '../CartSlice';

describe('toggleBar', () => {
  it('should change the boolean isBarOpen parameter in cart slice from true to false back and forth ', () => {
    expect(store.getState().Cart.isBarOpen).toBeFalsy;
    store.dispatch(toggleBar());
    expect(store.getState().Cart.isBarOpen).toBeTruthy;
    store.dispatch(toggleBar());
    expect(store.getState().Cart.isBarOpen).toBeFalsy;
  });
});
