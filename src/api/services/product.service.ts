import client from "../client";
import { GET_AZIZA, GET_BAITY, GET_EXIST, GET_POINTM, GET_PRODUCTS, GET_WIKI } from "../gql/queries/product.query";

export const fetchProducts= async ()=> 
{
    try {
        const { data } = await client.query({
          query: GET_PRODUCTS,
        });    
        return data.getProducts;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch products');
      }
}
export const fetchAzizaProducts = async () => 
{
  try {
    const {data} = await client.query({
      query: GET_AZIZA,
    });
    return data.getAziza;
  } catch (error) {
    console.error(error);
  }
}
export const fetchPointMProducts = async () => 
{
  try {
    const {data} = await client.query({
      query: GET_POINTM,
    });
    return data.getPointM;
  } catch (error) {
    console.error(error);
  }
}
export const fetchWikiProducts = async () => 
{
  try {
    const {data} = await client.query({
      query: GET_WIKI,
    });
    return data.getWiki;
  } catch (error) {
    console.error(error);
  }
}
export const fetchExistProducts = async () => 
{
  try {
    const {data} = await client.query({
      query: GET_EXIST,
    });
    return data.getExist
  } catch (error) {
    console.error(error);
  }
}
export const fetchBaityProducts = async () => 
{
  try {
    const {data} = await client.query({
      query: GET_BAITY,
    });
    return data.getBaity
  } catch (error) {
    console.error(error);
  }
}