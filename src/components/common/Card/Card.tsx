import React, { useState } from "react";
import { CardContainer, Image, Name, Price, OldPrice, PriceDifference, DetailsContainer, PriceLine, DiscountBox, Link, FacebookButton, ShareBox, FacebookIcon } from "./Card.styled";
import { CardProps } from "../../../types/CardTypes";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import StarRating from "../Stars/Stars";

const Card: React.FC<CardProps> = ({ imageUrl, name, price, oldPrice, discount, link }) => {
  const priceDifference = oldPrice - price;
  const [initialRating,setInitialRating] = useState(3);
  
  const truncateName = (name: string, wordsCount: number) => {
    const words = name.split(" ");
    const truncatedWords = words.slice(0, wordsCount);
    return truncatedWords.join(" ");
  };
  
  const handleFacebookShare = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
    window.open(facebookShareUrl, "_blank");
  };
  
  const handleRatingChange = (rating: number) => {
    console.log("New rating:", rating);
    setInitialRating(rating);
    // Handle the rating change here (e.g., update state, make API calls, etc.)
  };
  
  return (
    <CardContainer>
      <DiscountBox>{discount} %</DiscountBox>
      <Image src={imageUrl} alt={name} />
      <ShareBox>
        <FacebookButton onClick={handleFacebookShare} className="facebook-button">
          <FacebookIcon icon={faFacebookF} />
        </FacebookButton>
      </ShareBox>
      <DetailsContainer>
        <Name>{truncateName(name, 3)}</Name>
        <Price>{price} DT</Price>
        <OldPrice>{oldPrice} DT</OldPrice>
        <StarRating rating={initialRating} onChangeRating={handleRatingChange} />
        <PriceLine />
        <Link href={link} target="_blank">
          <PriceDifference>وفر / Save {priceDifference} DT</PriceDifference>
        </Link>
      </DetailsContainer>
    </CardContainer>
  );
};

export default Card;
