import React from "react";
import { DealsContainer, DealsTitle, Source } from "./Deals.styled";
import { GET_HIGHEST_EXIST } from "../../api/gql/queries/product.query";
import { useQuery } from "@apollo/client";
import Card from "../common/Card/Card";
import { LoadingIcon, ProductsContainer } from "../common/Card/Card.styled";
const Deals: React.FC = () => {
  const { loading, error, data } = useQuery(GET_HIGHEST_EXIST);

  if (loading) {
    return <DealsContainer><LoadingIcon/></DealsContainer>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const products = data?.getHighestDiscountExist 

  return (
    <DealsContainer>
      <DealsTitle>Top 5 in <Source>Exist</Source></DealsTitle>
      <ProductsContainer>
      {products.map((product:any) => (
        <Card
          key={product.id}
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
