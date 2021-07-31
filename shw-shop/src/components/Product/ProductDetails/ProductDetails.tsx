import React from 'react';
import { Item } from '../../../helpers/types';
import {
  ProductTitle,
  ProductPrice,
  ProductDescription,
} from './ProductDetails.component';
interface ProductDetailsProps {
  item: Item;
}
const ProductDetais: React.FC<ProductDetailsProps> = ({ item }) => {
  return (
    <>
      <ProductTitle>{item.name}</ProductTitle>
      <ProductPrice>{item.price + '$'}</ProductPrice>
      <ProductDescription>{'"' + item.description + '"'}</ProductDescription>
    </>
  );
};

export default ProductDetais;
