import { gql } from "@apollo/client";
export const LOGIN_MUTATION =gql`
mutation Login($email:String!,$password:String!) 
{
    loginCustomer(email:$email,password:$password)
    {
        Token
    }
}
`
export const REGISTER_MUTATION = gql`
  mutation Register($input: CustomersInput!) {
    createCustomer(
      customer_detail:$input
    ) {
      _id
      firstName
      lastName
      email
      password
    }
  }
`;