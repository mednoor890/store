import React, { useState } from "react";
import Aziza from "../../assets/logo-aziza.png"
import PointM from "../../assets/pointm.svg";
import Exist from "../../assets/exist-logo.jpg";
import { Brand, CarouselContainer,Container,DiscountText,ImageContainer,Text,Image  } from "./Carousel.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../common/Button/Button";
import { GET_HIGHEST_AZIZA, GET_HIGHEST_EXIST } from "../../api/gql/queries/product.query";
import { useQuery } from "@apollo/client";


const Carousel:React.FC = () => {
  const { loading, error, data } = useQuery(GET_HIGHEST_AZIZA);
  const { loadingE, errorE, dataE } = useQuery(GET_HIGHEST_EXIST);
  const { loadingP, errorP, dataP } = useQuery(GET_HIGHEST_AZIZA);
  const images = [
    { id: 1, url: Aziza,name:"Aziza/عزيزة",discount:data?.getHighestDiscountAziza[0]?.discount },
    { id: 2, url: PointM,name:"PointM",discount:dataP?.getHighestDiscountPointM[0]?.discount },
    { id: 3, url: Exist,name:"Exist",discount:dataE?.getHighestDiscountExist[0]?.discount },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  return <CarouselContainer>
    
    <Text>Best Deals In/احسن الافاريات في</Text>
    <Container>
    <Brand>{images[currentIndex].name}</Brand>
    <DiscountText>Up TO {images[currentIndex].discount}% Off/</DiscountText>
    </Container>
    <ImageContainer>
        
          <Image key={images[currentIndex].id} src={images[currentIndex].url} alt={images[currentIndex].name} />
      
      </ImageContainer>
      
      <Button 
      backgroundcolor="#F3F9FB" 
      hoverbackgroundcolor="#1AE216"
      hovercolor="white"
      borderradius="50%"
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
      borderradius="85%"
      height="86px"
      width="86px"
      left="960px"
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
