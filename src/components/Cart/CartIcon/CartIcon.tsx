import React from 'react';
import { CartWrapper, NumberOfItemsIndicator } from './CartIcon.component';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IconContext } from 'react-icons';

import { useWindowWidth } from '../../../helpers/useWindowWidth';
import { howManyItemsInCart } from '../CartSlice/selectors/howManyItemsInCart';
import { useSelector } from 'react-redux';

const CartIcon: React.FC = () => {
  const iconSize = useWindowWidth() > 780 ? '37' : '27';
  const howManyItems = useSelector(howManyItemsInCart);

  return (
    <>
      <CartWrapper isCartEmpty={howManyItems > 0}>
        <IconContext.Provider
          value={{
            color: howManyItems > 0 ? 'white' : 'black',
            style: { transform: 'translateX(-2px)' },
            size: iconSize,
          }}
        >
          <AiOutlineShoppingCart data-testid="cartIcon" />
        </IconContext.Provider>
        {howManyItems > 0 && (
          <NumberOfItemsIndicator isCartEmpty={howManyItems > 0}>
            {howManyItems}
          </NumberOfItemsIndicator>
        )}
      </CartWrapper>
    </>
  );
};

export default CartIcon;
