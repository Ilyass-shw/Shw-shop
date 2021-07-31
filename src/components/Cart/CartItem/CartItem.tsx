import React from 'react';
import QuantityButtons from '../../CustomComponents/QuantityButtons/QuantityButtons';
import { DeleteItem, UpdateItemQuantity } from './helpers';
import {
  Container,
  MoveToRight,
  Img,
  Info,
  MoveToLeft,
  ItemImg,
  ItemName,
  ItemPrice,
  RemoveButton,
} from './CartItem.component';
import { items } from '../CartSlice/CartSlice';
interface CartItemProps {
  product: items;
}
const CartItem: React.FC<CartItemProps> = ({ product }) => {
  return (
    <>
      <Container aria-label="cart-product-card">
        <MoveToRight>
          <Img>
            <ItemImg src={product.item.imgs[0]} />
          </Img>
          <Info>
            <ItemName>{product.item.name} </ItemName>
            <ItemPrice>
              {'$' + (product.item.price * product.quantity).toFixed(2)}
            </ItemPrice>
          </Info>
        </MoveToRight>
        <MoveToLeft data-testid="cart-quantity-input">
          <QuantityButtons
            productID={product.item.id}
            productQuantity={product.quantity}
            UpdateItemQuantity={UpdateItemQuantity}
          />
          <RemoveButton onClick={() => DeleteItem(product.item.id)}>
            Remove
          </RemoveButton>
        </MoveToLeft>
      </Container>
    </>
  );
};

export default CartItem;
