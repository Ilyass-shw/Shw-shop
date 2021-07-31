import React from 'react';
import userEvent from '@testing-library/user-event';
import store from '../../../App/store';
import { getProductsData } from '../ProductsSlice/ProductsSlice';
import ProductsList from './ProductsList';
import {
  renderWithStore,
  screen,
  waitFor,
  within,
} from '../../../test-utils/testUtils';

describe('ProductsList', () => {
  it('should render ', async () => {
    renderWithStore(<ProductsList />, store, 'withRouter');
  });

  it('should render ', async () => {
    const { asFragment } = renderWithStore(
      <ProductsList />,
      store,
      'withRouter',
    );
    expect(asFragment).toMatchSnapshot();
  });

  it('should correctly render all products of every category by the default.', async () => {
    // Usually the api call should be mocked here
    // but since data use in this project is fake
    // and no real api call is performed, the mocking is skipped.
    store.dispatch(getProductsData());
    renderWithStore(<ProductsList />, store, 'withRouter');

    // Get names and prices of the products that are rendered on the screen.
    const productsList = screen.getByLabelText('products List');
    let screenProductsData: string[] = [];
    await waitFor(() => {
      screenProductsData = within(productsList)
        .getAllByRole('heading')
        .map((item) => item.innerHTML);
    });

    // Get the actual correct products names and prices
    // that should be rendered on the screen.
    const correctProducts = store.getState().Items.filteredList;
    const correctProductsData = correctProducts
      .reduce(
        (acc, curr) => acc.concat([`${curr.name}`, `$${curr.price}`]),
        [] as string[],
      )
      .sort();

    // Test correct products are represented.
    expect(screenProductsData.sort()).toStrictEqual(correctProductsData.sort());
  }, 30000);

  it('should handle changing category filter', async () => {
    renderWithStore(<ProductsList />, store, 'withRouter');

    // Get the available filters.
    const filterInput = await screen.findByLabelText('Filter');

    const filters = within(filterInput)
      .getAllByRole('option')
      .map((op) => op.innerHTML);
    // here we want to try other filters, therefore the first option 
    // which is the default filter 'All jewelry' shall be excluded.
    let categories: string[];
    [filters[0], ...categories] = filters;

    // Choose one category filter.
    const firstFilter = within(filterInput).getByRole('option', {
      name: categories[0],
    });
    userEvent.selectOptions(filterInput, firstFilter);
    await waitFor(() => {
      expect(filterInput).toHaveValue(categories[0]);
      expect(store.getState().Items.filter).toBe(categories[0]);
    });

    // Get the actual correct products names and prices
    // that should be rendered on the screen.
    const correctProducts = store.getState().Items.filteredList;
    const correctProductsData = correctProducts
      .reduce(
        (acc, curr) => acc.concat([`${curr.name}`, `$${curr.price}`]),
        [] as string[],
      )
      .sort();

    // Get names and prices of the products that are rendered on the screen.
    const productsList = screen.getByLabelText('products List');
    let screenProductsData: string[] = [];
    await waitFor(() => {
      screenProductsData = within(productsList)
        .getAllByRole('heading')
        .map((item) => item.innerHTML);
    });

    // Test correct products are represented.
    expect(screenProductsData.length > 0).toBeTruthy();
    expect(correctProductsData.length > 0).toBeTruthy();
    expect(screenProductsData.sort()).toStrictEqual(correctProductsData.sort());

    // Change the category filter one more time.
    const secondFilter = within(filterInput).getByRole('option', {
      name: categories[1],
    });
    userEvent.selectOptions(filterInput, secondFilter);
    await waitFor(() => {
      expect(filterInput).toHaveValue(categories[1]);
      expect(store.getState().Items.filter).toBe(categories[1]);
    });
    // Get the actual correct products names and prices
    // that should be rendered on the screen.
    const newCorrectProducts = store.getState().Items.filteredList;
    const newCorrectProductsData = newCorrectProducts
      .reduce(
        (acc, curr) => acc.concat([`${curr.name}`, `$${curr.price}`]),
        [] as string[],
      )
      .sort();

    // Get names and prices of the products that are rendered on the screen.
    let newScreenProductsData: string[] = [];
    await waitFor(() => {
      newScreenProductsData = within(productsList)
        .getAllByRole('heading')
        .map((item) => item.innerHTML);
    });
    // Test correct products are represented.
    expect(newScreenProductsData.length > 0).toBeTruthy();
    expect(newCorrectProductsData.length > 0).toBeTruthy();
    expect(newScreenProductsData.sort()).toStrictEqual(
      newCorrectProductsData.sort(),
    );
  });
});
