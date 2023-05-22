import React from "react";
import Carousel from "../components/Carousel/Carousel";
import Navbar from "../components/common/Navbar/Navbar";
import Deals from "../components/Deals/Deals";
import LowestPrices from "../components/DealsAz/LowestPrices";
import TopBrand from "../components/TopBrands/TopBrand";
import Footer from "../components/Footer/Footer";

const LandingPage:React.FC = () => {
  return <>
  <Navbar/>
      <Carousel/>
      <Deals/>
      <LowestPrices/>
      <TopBrand/>
      <Footer/>
  </>;
};

export default LandingPage;
