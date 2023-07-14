import React, { useEffect, useState } from "react";
import Aziza from "../../assets/logo-aziza.png"
import PointM from "../../assets/pointm.svg";
import Exist from "../../assets/exist-logo.png";
import Wiki from "../../assets/wiki-logo.png";
import Baity from "../../assets/baity-logo.jpg"
import { Brand, CarouselContainer,Container,DiscountText,ImageContainer,Text,Image  } from "./Carousel.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../common/Button/Button";
import { GET_HIGHEST_AZIZA, GET_HIGHEST_BAITY, GET_HIGHEST_EXIST, GET_HIGHEST_POINTM, GET_HIGHEST_WIKI } from "../../api/gql/queries/product.query";
import { useQuery } from "@apollo/client";

const Carousel:React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { id: 1, url: Aziza, name: "Aziza", query: GET_HIGHEST_AZIZA, backgroundColor: "RGB(237, 206, 28)" },
    { id: 2, url: PointM, name: "PointM", query: GET_HIGHEST_POINTM, backgroundColor: "RGB(237, 206, 28)" },
    { id: 3, url: Exist, name: "Exist", query: GET_HIGHEST_EXIST, backgroundColor: "RGB(237, 206, 28)" },
    { id: 4, url: Wiki, name: "Wiki", query: GET_HIGHEST_WIKI, backgroundColor: "RGB(237, 206, 28)" },
    {id:5,url:Baity,name: "Baity", query:GET_HIGHEST_BAITY, backgroundColor: "RGB(237, 206, 28)"}
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000); 

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, images.length]);

  const { loading, error, data } = useQuery(images[currentIndex].query);
  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  const getCurrentDiscount = () => {
    const currentData = data[`getHighestDiscount${images[currentIndex].name}`];
    return currentData?.[0]?.discount || 0;
  };
  return <CarouselContainer backgroundColor={images[currentIndex].backgroundColor}>
    
    <Text>Best Deals In/احسن الافاريات في</Text>
    <Container>
    <Brand>{images[currentIndex].name}</Brand>
    {
  loading ? (
    <DiscountText>Loading...</DiscountText>
  ) : error ? (
    <DiscountText>Error: {error.message}</DiscountText>
  ) : (
    <DiscountText>Up TO {getCurrentDiscount()} % OFF</DiscountText>
  )
}
    </Container>
    <ImageContainer>
          <Image key={images[currentIndex].id} src={images[currentIndex].url} alt={images[currentIndex].name} />
    </ImageContainer>
      
    <Button 
  backgroundcolor="#F3F9FB" 
  hoverbackgroundcolor="#1AE216"
  hovercolor="white"
  borderradius="95%"
  height="86px"
  width="86px"
  left="-44px"
  top="30%"
  position="relative"
  transform="translateY(-50%)"
  borderright="5px solid white"
  borderbottom="5px solid white"
  bordertop="5px solid white"
  onClick={handlePrevious}
>
  <FontAwesomeIcon icon={faAngleLeft} />
</Button>

    <Button 
      backgroundcolor="#F3F9FB" 
      hoverbackgroundcolor="#1AE216"
      hovercolor="white"
      borderradius="95%"
      height="86px"
      width="86px"
      left="950px"
      position="relative"
      top="30%"
      transform="translateY(-50%)"
      borderleft="5px solid white"
      borderbottom="5px solid white"
      bordertop="5px solid white"
      onClick={handleNext}
    >
      <FontAwesomeIcon icon={faAngleRight} />
    </Button>
    </CarouselContainer>;
};

export default Carousel;
