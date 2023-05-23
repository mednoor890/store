import React from "react";
import { LowestContainer } from "./Lowest.styled";
import { DealsTitle } from "../Deals/Deals.styled";
import { LoadingIcon } from "../common/Card/Card.styled";
import { GET_LOWEST_PRICES } from "../../api/gql/queries/product.query";
import { useQuery } from "@apollo/client";
import Prices from "./Prices";
import { PricesContainer } from "./Prices.styled";

const LowestPrices:React.FC = () => {
  const { loading, error, data } = useQuery(GET_LOWEST_PRICES);

  if (loading) {
    return <LowestContainer><LoadingIcon/></LowestContainer>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const lowestPrices = data?.getLowestPrices

  return ( <LowestContainer>
    <DealsTitle>أرخص أسوام اللمجة عند عزيزة/Lowest Snack Prices in AZIZA</DealsTitle>
    <PricesContainer>
    {lowestPrices.map((product:any) => (
        <Prices
          key={product.id}
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


 


