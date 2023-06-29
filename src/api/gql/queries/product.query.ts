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
export const GET_HIGHEST_BAITY = gql`
  query {getHighestDiscountBaity {
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
      link,
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
      link,
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
      link,
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
      startDate,
      link
    
  }
}
  `
  export const GET_BAITY=gql`
  query
  {
    getBaity
    {
      
        _id,
        availibility,
        brand,
        link,
        category {_id},
        description,
        discount,
        endDate,
        image,
        name,
        price,
        price_on_discount,
        
      
    }
   }
    `

    export const GET_PRODUCT_BY_SEARCH = gql`
    query getProductsBySearch($productName: String!) {
      getProductsBySearch(productName: $productName) {
        _id
        brand
        description
        discount
        image
        name
        price
        price_on_discount
        link
      }
    }
  `;
  export const GET_CUSTOMER_QUERY = gql`
  query GetCustomer($customerId: String!) {
    getCustomer(id: $customerId) {
      _id
      firstName
      lastName
      email
      image
    }
  }
`;
