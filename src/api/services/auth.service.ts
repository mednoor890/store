import { client } from "../client";
import { LOGIN_MUTATION, REGISTER_MUTATION } from "../gql/mutations/auth.mutation";
import Cookies from 'js-cookie';

interface LoginResponse {
    loginCustomer:{
        Token: string
    }
}
export type RegisterInput = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
export const loginCustomer =async(email:string, password:string)=>
{
    console.log("Logging in with", email, password);
    const credentials = {
        email,
        password
    }
    try {
    const response = await client.mutate<LoginResponse>({
        mutation:LOGIN_MUTATION, 
        variables:credentials
    });
    console.log("loginRequest response", response);
    const customerToken= response.data?.loginCustomer;
    if (customerToken) {
        Cookies.set('customerToken', customerToken.Token, { expires: 7, secure: true });

        console.log("Login succesful, auth token", customerToken);
        
    }
    else {
        console.log("Login failed, no auth token");
    }
    return customerToken;
    }
    catch (err) {
        console.error("Error during login",err);
           //throw new Error("Login failed")
        }
}
export const registerCustomer =async(input:RegisterInput)=>
{
    try {
        const response = await client.mutate({
            mutation:REGISTER_MUTATION,
            variables:{input:{
                firstName:input.firstName,
                lastName:input.lastName,
                email:input.email,
                password:input.password
            }}
        })
        console.log("registerRequest response", response);
       return response
    } catch (error) {
        console.error("Error during registration",error)
    }
}
