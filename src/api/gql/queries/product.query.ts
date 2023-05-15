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
  query getHighestDiscountAziza {
    discount
  }
`;

export const GET_HIGHEST_POINTM = gql`
  query getHighestDiscountPointM {
    discount
  }
`;

export const GET_HIGHEST_EXIST = gql`
  query getHighestDiscountExist {
    discount
  }
`;
