import {onError} from '@apollo/client/link/error';
import ReactDOM from "react-dom";
import Main from "./Main";
import './CSS/index.css';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from
} from '@apollo/client';

//Error handler in case we are unable to connect to the server. 
const errorLink = onError(({graphQLErrors, networkError}) => {
  if(graphQLErrors) {
    graphQLErrors.map(({message, locations, path}) => {
      alert(`GraphQL Error  ${message}\n${locations}\n${path}`)
      return(message);
    })
  }
});

//Fetch the apollo server link to have access to the data.
const link = from([
   errorLink,
  new HttpLink({uri: 'http://localhost:4000/'}),
])

const client = new ApolloClient({
  cache: new InMemoryCache({
    // Set props __TypeName to false.
    addTypename: false
  }),
  link: link,
});
 
ReactDOM.render(
  <ApolloProvider client={client} >
    <Main/>
  </ApolloProvider>,
  document.getElementById("root")
);