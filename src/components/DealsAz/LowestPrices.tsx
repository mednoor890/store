import React from "react";
import { LowestContainer } from "./Lowest.styled";
import { DealsTitle } from "../Deals/Deals.styled";
import { LoadingIcon } from "../common/Card/Card.styled";
import { GET_LOWEST_PRICES } from "../../api/gql/queries/product.query";
import { useQuery } from "@apollo/client";
import Prices from "./Prices";
import { PricesContainer } from "./Prices.styled";
import { Button } from "../common/Button/Button";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const LowestPrices:React.FC = () => {
  const { loading, error, data } = useQuery(GET_LOWEST_PRICES);
  const navigate=useNavigate()
  const authToken = Cookies.get("customerToken");
  const handleViewClick=()=>
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
    return <LowestContainer><LoadingIcon/></LowestContainer>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const lowestPrices = data?.getLowestPrices

  return ( <LowestContainer>
    <DealsTitle>
      أرخص أسوام اللمجة و المواد الغذائية عند عزيزة
      /Lowest Snack & FoodStuff Prices in AZIZA 
      <Button onClick={handleViewClick} hovercolor="#1AE216" color="black" backgroundcolor="white"  position="relative" left="215px" top="2px">View All</Button>
    </DealsTitle>
    <PricesContainer>
    {lowestPrices.map((product:any) => (
        <Prices
          key={product._id}
          image={product.image}
          name={product.name}
          price={product.price}
          
        />
      ))}
      </PricesContainer>
  </LowestContainer>
  )
};

export default LowestPrices;


 


