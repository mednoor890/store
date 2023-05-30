import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query {
    getProducts {
      _id
      availibility
      brand
      category {
        _id
      }
      description
      discount
      endDate
      image
      name
      price
      price_on_discount
      quantity
      startDate
      link
    }
  }
`;

export const GET_PRODUCT = gql`
  query getProduct($id: String!) {
    getProduct(_id: $id) {
      _id
      availibility
      brand
      category {
        _id
      }
      description
      discount
      endDate
      image
      name
      price
      price_on_discount
      quantity
      startDate
      link
    }
  }
`;

export const GET_HIGHEST_AZIZA = gql`
  query {
    getHighestDiscountAziza {
    discount
    _id
  }
}
`;

export const GET_HIGHEST_POINTM = gql`
  query {getHighestDiscountPointM {
    _id
    discount
    price
    price_on_discount
    link
    name
    image
    brand
  }
}
`;

export const GET_HIGHEST_EXIST = gql`
  query {getHighestDiscountExist {
    name
    image
    link
    price
    price_on_discount
    discount
    _id
  }
}
`;
export const GET_HIGHEST_WIKI=gql`
query{getHighestDiscountWiki{
_id
discount
name
image
link
price
price_on_discount
brand
}
}`
export const GET_LOWEST_PRICES =gql`
query {getLowestPrices
  {
_id
name
price
image

  }
}
`
export const GET_AZIZA=gql`
query
{
  getAziza
  {
    
      _id,
      availibility,
      brand,
      category {_id},
      description,
      discount,
      endDate,
      image,
      name,
      price,
      price_on_discount,
      quantity,
      startDate
    
  }
 }
  `
export const GET_POINTM=gql`
query
{
  getPointM
  {
    
      _id,
      availibility,
      brand,
      category {_id},
      description,
      discount,
      endDate,
      image,
      name,
      price,
      price_on_discount,
      quantity,
      startDate
    
  }
}
`
export const GET_WIKI=gql`
query{
  getWiki
  {
      _id,
      availibility,
      brand,
      category {_id},
      description,
      discount,
      endDate,
      image,
      name,
      price,
      price_on_discount,
      quantity,
      startDate  
  }}
`
export const GET_EXIST=gql`
query
{
  getExist
  {
      _id,
      availibility,
      brand,
      category {_id},
      description,
      discount,
      endDate,
      image,
      name,
      price,
      price_on_discount,
      quantity,
      startDate
    
  }
}
  `