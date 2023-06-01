
  import { ApolloClient, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { InMemoryCache } from "@apollo/client/cache";
import Cookies from "js-cookie";

const httpLink = createHttpLink({ uri: 'http://localhost:5000/graphql' });
const authLink = setContext((_, { headers }) => {
  const cookies = Cookies.get();
  const customerToken = cookies['customerToken'];
  return {
    headers: {
      ...headers,
      authorization: customerToken ? ` ${customerToken}` : "",
    }
  }
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
export default client;