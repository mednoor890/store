import React from "react";
import Navbar from "../components/common/Navbar/Navbar";
import Promotions from "../components/promotions/Promotions";
import Carousel from "../components/Carousel/Carousel";
//import Footer from "../components/Footer/Footer";

const Products:React.FC = () => {
  return <>
  <Carousel/>
  <Navbar/>
  <Promotions />
  </>;
};

export default Products;
