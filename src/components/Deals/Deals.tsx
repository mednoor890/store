import React from "react";
import { DealsContainer, DealsTitle, Source } from "./Deals.styled";
import { GET_HIGHEST_EXIST } from "../../api/gql/queries/product.query";
import { useQuery } from "@apollo/client";
import Card from "../common/Card/Card";
import { LoadingIcon, ProductsContainer } from "../common/Card/Card.styled";
import { Button } from "../common/Button/Button";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Deals: React.FC = () => {
  const { loading, error, data } = useQuery(GET_HIGHEST_EXIST);
const navigate=useNavigate()
const authToken = Cookies.get("customerToken");
const handleView=()=>
{
  if (authToken)
  {
    navigate("/promotions")
  }
  else
  {
 navigate("/signin")
  }
}
  if (loading) {
    return <DealsContainer><LoadingIcon/></DealsContainer>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const products = data?.getHighestDiscountExist 

  return (
    <DealsContainer>
      <DealsTitle>Top 5 in <Source> Exist </Source>  
          <Button           onClick={() => handleView()}
hovercolor="#1AE216" color="black" backgroundcolor="white"  position="relative" left="898px" top="2px">View All</Button>
</DealsTitle>
      <ProductsContainer>
      {products.map((product:any) => ( 
        <Card
          key={product._id}
          imageUrl={product.image}
          link={product.link}
          name={product.name}
          price={product.price}
          oldPrice={product.price_on_discount}
          discount={product.discount}
          priceDifference={product.price_on_discount - product.price}
        />
      ))}
      </ProductsContainer>
    </DealsContainer>
  );
};

export default Deals;
