import React, { useState } from 'react';
import { Item } from '../../../helpers/types';
import ProductDetais from '../ProductDetails/ProductDetails';
import QuantityButtons from '../../CustomComponents/QuantityButtons/QuantityButtons';
import ProductViewImgSlider from '../ProductViewImgSlider/ProductViewImgSlider';
import { AddToCart } from './helpers';
import {
  NumberOfItem,
  ViewContainer,
  Description,
  Size,
  CustomLabel,
  CustomSelect,
  CustomOption,
  ButtomView,
  AddToCartButton,
} from './ProductView.component';

interface productViewProps {
  item: Item;
}
const ProductView: React.FC<productViewProps> = ({ item }) => {
  const options = ['Choose a Size', 'XS', 'S', 'M', 'L', 'Xl']; // We'd udually get this from store.
  const [itemSize, setItemSize] = useState('Choose a Size');
  const [quantity, setQuantity] = useState(1);

  return (
    <ViewContainer>
      <>
        <ProductViewImgSlider imgs={item.imgs} />
        <Description>
          <ProductDetais item={item} />
          <Size>
            <CustomLabel htmlFor="size">Size</CustomLabel>
            <CustomSelect
              value={itemSize}
              id="size"
              onChange={(e) => setItemSize(e?.target.value)}
            >
              {options.map((option) => (
                <CustomOption key={option}>{option}</CustomOption>
              ))}
            </CustomSelect>
          </Size>
          <ButtomView>
            <NumberOfItem data-testid="product-quantity-input">
              <QuantityButtons
                productID={item.id}
                productQuantity={quantity}
                setItemQuantity={setQuantity}
              />
            </NumberOfItem>
            <AddToCartButton
              onClick={() => {
                !itemSize || !(itemSize === options[0])
                  ? AddToCart(item, itemSize, quantity)
                  : window.alert('Please Choose a Size!');
              }}
            >
              Add To Cart
            </AddToCartButton>
          </ButtomView>
        </Description>
      </>
    </ViewContainer>
  );
};

export default ProductView;
