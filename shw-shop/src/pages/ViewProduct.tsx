import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import ProductView from '../components/Product/ProductView/ProductView';
import { getProductByIdSelector } from '../components/Products/ProductsSlice/selectors/getProductByIdSelector';
const Home: React.FC = () => {
  interface i {
    id?: string;
  }
  let Id = 1;
  const { id } = useParams<i>();
  if (id) {
    Id = parseFloat(id);
  }

  const Item = useSelector(getProductByIdSelector(Id));
  return (
    <>
      <NavBar />
      {Item ? <ProductView item={Item} /> : <p>Product not found!</p>}
      <Footer />
    </>
  );
};

export default Home;
