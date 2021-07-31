import React from 'react';
import { useSelector } from 'react-redux';
// import LazyLoad from 'react-lazyload';
import Product from '../Product/Product';
import ProductsListFilter from '../ProductsListFilter/ProductsListFilter';
import { ItemList, ProductsWrapper } from './ProductsList.component';
import { filteredListSelector } from '../ProductsSlice/selectors/filteredListSelector';

const ProductsList: React.FC = () => {
  const productsList = useSelector(filteredListSelector);

  return (
    <ProductsWrapper>
      <ProductsListFilter />

      <ItemList aria-label="products List" data-testid="products-list">
        {productsList.map((item) => {
          return (
            // <LazyLoad height={400} >
            <Product item={item} key={item.id} />
            // </LazyLoad>
          );
        })}
      </ItemList>
    </ProductsWrapper>
  );
};

export default ProductsList;
