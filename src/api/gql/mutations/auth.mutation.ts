import { gql } from "@apollo/client";
export const LOGIN_MUTATION =gql`
mutation login($email:String!,$password:String!) 
{
    loginCustomer(email:$email,password:$password)
    {   _id
      firstName
      lastName
      email
        Token
        image
        password
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