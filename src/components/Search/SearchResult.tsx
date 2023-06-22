import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { GET_PRODUCT_BY_SEARCH } from "../../api/gql/queries/product.query";
import Card from "../common/Card/Card";
import { CategoryContainer } from "../Category/Category.styled";
import { CardContainer } from "../promotions/Promotions.styled";

const SearchResults = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");

  const [getProductBySearch, { loading, error, data: searchResults }] = useLazyQuery(GET_PRODUCT_BY_SEARCH);

  useEffect(() => {
    if (searchQuery) {
      getProductBySearch({ variables: { productName: searchQuery } });
    }
  }, [searchQuery]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching search results.</div>;
  }

  if (!searchResults || searchResults.getProductsBySearch.length === 0) {
    return <div>No search results found.</div>;
  }

  return (
    <CategoryContainer>
      {searchResults.getProductsBySearch.map((product: any) => (
        <CardContainer key={product._id}>
          <Card
            imageUrl={product.image}
            name={product.name}
            price={product.price}
            oldPrice={product.price_on_discount}
            discount={product.discount}
            link={product.link}
            priceDifference={0}
          />
        </CardContainer>
      ))}
    </CategoryContainer>
  );
};

export default SearchResults;
