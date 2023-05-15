import { client } from "../client";
import { GET_PRODUCTS } from "../gql/queries/product.query";

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