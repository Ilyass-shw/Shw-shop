import React from 'react';
import { GrFormClose } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import { toggleCartSlideBar } from '../../../helpers/toggleCartSlideBar';
import { CartItemsSelector } from '../CartSlice/selectors/cartItemsSelector';
import { isCartBarOpenSelector } from '../CartSlice/selectors/isCartBarOpenSelector';
import { TotalPriceSelector } from '../CartSlice/selectors/TotalPriceSelector';
import CartItem from '../CartItem/CartItem';
import {
  Content,
  CloseButton,
  CartBarWrapper,
  Items,
  CheckoutButton,
  CheckoutFooter,
  Price,
  Total,
} from './CartSlideBar.component';

const CartBar: React.FC = () => {
  const isBarOpen = useSelector(isCartBarOpenSelector);
  const items = useSelector(CartItemsSelector);
  const total = useSelector(TotalPriceSelector);

  const fullPage = items.length > 1;

  return (
    <>
      <CartBarWrapper
        data-testid="cart-slide-bar-background"
        onClick={() => {
          toggleCartSlideBar();
        }}
        open={isBarOpen}
      />

      <Content
        fullPage={fullPage}
        open={isBarOpen}
        data-testid="cart-slide-bar"
      >
        <CloseButton
          data-testid="cart-slide-bar-closeButton"
          onClick={() => {
            toggleCartSlideBar();
          }}
        >
          <GrFormClose size={30} />
        </CloseButton>

        <Items aria-label='cart-products'>
          {items.length > 0 ? (
            items.map((product) => (
              <CartItem product={product} key={product.item.id} />
            ))
          ) : (
            <p>Your cart is currently empty.</p>
          )}
        </Items>
        <CheckoutFooter>
          <Total>
            <h5>Total</h5>
            <Price>{'$' + total.toFixed(2)}</Price>
          </Total>

          <CheckoutButton
            data-testid="cart-slide-bar-checkoutButton"
            disable={(total === 0).toString()}
            to="/checkout"
            onClick={() => {
              toggleCartSlideBar();
            }}
          >
            Checkout
          </CheckoutButton>
        </CheckoutFooter>
      </Content>
    </>
  );
};

export default CartBar;
