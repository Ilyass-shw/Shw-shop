import React from 'react';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';
import NavBar from '../components/NavBar/NavBar';
import ProductsList from '../components/Products/ProductsList/ProductsList';

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ProductsList />
      <Footer />
    </>
  );
};

export default Home;
