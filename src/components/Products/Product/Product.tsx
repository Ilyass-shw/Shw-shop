import React, { useRef, useState, useEffect } from 'react';
import ProductImgs from '../ProductImgs/ProductImgs';
import { Item } from '../../../helpers/types';
import { handleScroll } from './helpers';
import {
  ProductItem,
  ItemName,
  ItemPrice,
  ProductLink,
} from './Product.component';

interface product {
  item: Item;
}
const Product: React.FC<product> = ({ item }) => {
  const [isHover, setIsHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const img = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', () =>
      handleScroll(img.current, setIsVisible),
    );
    return () => {
      window.removeEventListener('scroll', () =>
        handleScroll(img.current, setIsVisible),
      );
    };
  }, []);
  return (
    <ProductItem
      onMouseOver={(): void => setIsHover(true)}
      onMouseOut={(): void => setIsHover(false)}
    >
      <ProductLink
        ref={img}
        to={`/product/${item.id}`}
        aria-label="product card"
      >
        <ProductImgs
          imgs={item.imgs}
          alt={item.name}
          isOnHover={isHover}
          isVisible={isVisible}
        />
        <ItemName>{item.name}</ItemName>
        <ItemPrice>{'$' + item.price}</ItemPrice>
      </ProductLink>
    </ProductItem>
  );
};

export default Product;
