import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { StarContainer } from "./Stars.styled";

interface StarRatingProps {
  rating: number;
  onChangeRating: (rating: number) => void;
}



const StarRating: React.FC<StarRatingProps> = ({ rating, onChangeRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (index: number) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index: number) => {
    onChangeRating(index);
  };

  const renderStar = (index: number) => {
    const icon: IconDefinition = index <= (hoverRating || rating) ? solidStar : regularStar;

    return (
      <StarContainer
        key={index}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(index)}
      >
        <FontAwesomeIcon icon={icon} />
      </StarContainer>
    );
  };

  return <div>{[1, 2, 3, 4, 5].map((index) => renderStar(index))}</div>;
};

export default StarRating;
