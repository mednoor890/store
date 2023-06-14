
  import { ApolloClient, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { InMemoryCache } from "@apollo/client/cache";
import Cookies from "js-cookie";

const httpLink = createHttpLink({ uri: 'http://localhost:5000/graphql' });
const authLink = setContext((_, { headers }) => {
  const cookies = Cookies.get();
  //console.log(cookies)
  const token = cookies['customerToken'];
 // console.log(token)
  return {
    headers: {
      ...headers,
      authorization: token ? ` ${token}` : "",
    }
  }
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
export default client;