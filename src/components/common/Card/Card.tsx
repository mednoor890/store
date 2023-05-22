
import React from "react";
import { CardContainer, Image, Name, Price, OldPrice, PriceDifference, DetailsContainer, PriceLine, DiscountBox, Link } from "./Card.styled";
interface CardProps
{
    imageUrl:string;
    name:string;
    price:number;
    oldPrice:number;
    priceDifference:number;
    discount:number;
    link:string;
}
const Card :React.FC<CardProps>= ({ imageUrl, name, price, oldPrice,discount,link }) => {
  const priceDifference = oldPrice - price;

  return (
    <CardContainer>
        <DiscountBox>{discount} % </DiscountBox>
      <Image src={imageUrl} alt={name} />
      <DetailsContainer>
      <Name>{name}</Name>
      <Price>{price} DT</Price>
      <OldPrice>{oldPrice} DT</OldPrice>
      <PriceLine/>
      <Link href={link} target="_blank">
      <PriceDifference>/وفر Save {priceDifference} DT</PriceDifference>
      </Link>
      </DetailsContainer>
     
    </CardContainer>
  );
};
export default Card;
