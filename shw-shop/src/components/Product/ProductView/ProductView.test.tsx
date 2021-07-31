import React from 'react';
import { render, screen, waitFor, within } from '../../../test-utils/testUtils';
import userEvent from '@testing-library/user-event';
import ProductView from './ProductView';
import store from '../../../App/store';
import { resetCart } from '../../Cart/CartSlice/CartSlice';

describe('ProductView', () => {
  const Item = {
    name: 'itemOne',
    id: 1,
    description: 'rand',
    imgs: ['src'],
    price: 45,
  };

  it('should render', () => {
    render(<ProductView item={Item} />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<ProductView item={Item} />);
    expect(asFragment).toMatchSnapshot();
  });

  it('should allow to choose a size', () => {
    render(<ProductView item={Item} />);

    const sizeInput = screen.getByLabelText(/size/i);

    expect(sizeInput).toHaveValue('Choose a Size');
    userEvent.selectOptions(sizeInput, 'S');

    expect(sizeInput).not.toHaveValue('s');

    userEvent.selectOptions(sizeInput, 'M');
    expect(sizeInput).not.toHaveValue('m');
  });

  it('should allow to add quantity and subtract quantity with minimum one item', () => {
    render(<ProductView item={Item} />);

    const addButton = screen.getByRole('button', { name: /\+/i });
    const minusButton = screen.getByRole('button', { name: /\-/i });
    const quantityBlock = screen.getByTestId('product-quantity-input');

    expect(within(quantityBlock).getByRole('heading').innerHTML).toBe('1');
    userEvent.click(addButton);
    expect(within(quantityBlock).getByRole('heading').innerHTML).toBe('2');
    userEvent.click(minusButton);
    expect(within(quantityBlock).getByRole('heading').innerHTML).toBe('1');
    userEvent.click(minusButton);
    expect(within(quantityBlock).getByRole('heading').innerHTML).toBe('1');
    userEvent.click(addButton);
    userEvent.click(addButton);
    userEvent.click(addButton);
    expect(within(quantityBlock).getByRole('heading').innerHTML).toBe('4');
  });

  it('should not allow to add item to the cart before choosing a size', async () => {
    global.alert = jest.fn();
    render(<ProductView item={Item} />);
    const sizeInput = screen.getByLabelText(/size/i);
    expect(sizeInput).toHaveValue('Choose a Size');
    const addToCartButton = screen.getByRole('button', {
      name: /add to cart/i,
    });
    userEvent.click(addToCartButton);
    await waitFor(() =>
      expect(global.alert).toBeCalledWith('Please Choose a Size!'),
    );
    userEvent.selectOptions(sizeInput, 'S');
    userEvent.selectOptions(sizeInput, 'Choose a Size');
    userEvent.click(addToCartButton);
    await waitFor(() =>
      expect(global.alert).toBeCalledWith('Please Choose a Size!'),
    );
  });

  it('should  allow to add item to the cart.', async () => {
    render(<ProductView item={Item} />);
    expect(store.getState().Cart.items).toHaveLength(0);

    const sizeInput = screen.getByLabelText(/size/i);
    const addButton = screen.getByRole('button', { name: /\+/i });
    const addToCartButton = screen.getByRole('button', {
      name: /add to cart/i,
    });
    userEvent.click(addButton);
    userEvent.click(addButton);
    userEvent.selectOptions(sizeInput, 'Xl');
    userEvent.click(addToCartButton);
    await waitFor(() => {
      expect(store.getState().Cart.items).toHaveLength(1);
      expect(store.getState().Cart.items[0]).toMatchInlineSnapshot(`
        Object {
          "item": Object {
            "description": "rand",
            "id": 1,
            "imgs": Array [
              "src",
            ],
            "name": "itemOne",
            "price": 45,
          },
          "quantity": 3,
          "size": "Xl",
        }
      `);
    });
  });

  it('should  allow to update item details that already exist in the cart, by adding it again with different size and quantity.', async () => {
    store.dispatch(resetCart());

    render(<ProductView item={Item} />);

    expect(store.getState().Cart.items).toHaveLength(0);

    const sizeInput = screen.getByLabelText(/size/i);
    const addButton = screen.getByRole('button', { name: /\+/i });
    const addToCartButton = screen.getByRole('button', {
      name: /add to cart/i,
    });
    userEvent.click(addButton);
    userEvent.selectOptions(sizeInput, 'M');
    userEvent.click(addToCartButton);
    await waitFor(() => {
      expect(store.getState().Cart.items).toHaveLength(1);
      expect(store.getState().Cart.items[0]).toMatchInlineSnapshot(`
        Object {
          "item": Object {
            "description": "rand",
            "id": 1,
            "imgs": Array [
              "src",
            ],
            "name": "itemOne",
            "price": 45,
          },
          "quantity": 2,
          "size": "M",
        }
      `);
    });

    userEvent.click(addButton);
    userEvent.click(addButton);
    userEvent.click(addButton);
    userEvent.selectOptions(sizeInput, 'S');
    userEvent.click(addToCartButton);
    await waitFor(() => {
      expect(store.getState().Cart.items).toHaveLength(1);
      expect(store.getState().Cart.items[0]).toMatchInlineSnapshot(`
              Object {
                "item": Object {
                  "description": "rand",
                  "id": 1,
                  "imgs": Array [
                    "src",
                  ],
                  "name": "itemOne",
                  "price": 45,
                },
                "quantity": 5,
                "size": "S",
              }
            `);
    });
  });
});
