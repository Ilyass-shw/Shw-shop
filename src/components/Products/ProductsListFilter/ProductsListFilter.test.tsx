import React from 'react';
import userEvent from '@testing-library/user-event';
import store from '../../../App/store';
import { getProductsData } from '../ProductsSlice/ProductsSlice';
import ProductsListFilter from './ProductsListFilter';
import {
  renderWithStore,
  screen,
  waitFor,
  within,
} from '../../../test-utils/testUtils';

describe('ProductsListFilter', () => {
  it('should render ', async () => {
    const { asFragment } = renderWithStore(
      <ProductsListFilter />,
      store,
      'withRouter',
    );
    const filterInput = await screen.findByLabelText('Filter');
    const filters = within(filterInput).getAllByRole('option');

    expect(asFragment).toMatchSnapshot();
    expect(filterInput).toHaveValue('All Jewelry');
    expect(filters).toHaveLength(1);
    expect(store.getState().Items.filter).toBe('AllJewelry');
  });

  it('should allow to change the filter ', async () => {
    store.dispatch(getProductsData());

    renderWithStore(<ProductsListFilter />, store, 'withRouter');

    const filterInput = await screen.findByLabelText('Filter');

    //lets make sure additional filter options are added.
    await waitFor(() => {
      const filters = within(filterInput).getAllByRole('option');
      expect(filters.length > 1).toBeTruthy();
    });

    //lets make sure changing filter option is possible:
    //lets first check the default filter 'All Jewelry'.
    expect(store.getState().Items.filter).toBe('AllJewelry');
    expect(filterInput).toHaveValue('All Jewelry');

    //let's then change the filter.
    const filterOne = store.getState().Items.categories[1];

    let option = within(filterInput).getByRole('option', { name: filterOne });

    userEvent.selectOptions(filterInput, option);

    await waitFor(() => {
      expect(filterInput).toHaveValue(filterOne);
      expect(store.getState().Items.filter).toBe(filterOne);
    });

    //let's change the filter one more time.
    const filterTwo = store.getState().Items.categories[2];

    option = within(filterInput).getByRole('option', { name: filterTwo });

    userEvent.selectOptions(filterInput, option);

    await waitFor(() => {
      expect(filterInput).toHaveValue(filterTwo);
      expect(store.getState().Items.filter).toBe(filterTwo);
    });

    //lets go back to the default filter 'All Jewelry'.
    option = within(filterInput).getByRole('option', { name: 'All Jewelry' });

    userEvent.selectOptions(filterInput, option);

    await waitFor(() => {
      expect(filterInput).toHaveValue('All Jewelry');
      expect(store.getState().Items.filter).toBe('AllJewelry');
    });
  });
});
