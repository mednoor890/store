import React from "react";
import { ImageContainer, Img, LowestPriceContainer, P } from "./Prices.styled";
interface LowestPrices
{
  image: string;
  name: string;
  price: number;
}
const Prices:React.FC<LowestPrices> = ({image, name, price}) => {
    
  return( 
<LowestPriceContainer>
<ImageContainer>
<Img src={image} alt={name}/>
</ImageContainer>
<P>{price}DT</P>
  </LowestPriceContainer>
)};

export default Prices;
