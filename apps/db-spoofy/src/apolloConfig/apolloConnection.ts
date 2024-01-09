import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  DefaultOptions,
} from '@apollo/client';

export const postgraphileHttpLink = new HttpLink({
  uri: 'http://localhost:8080/graphql',
});

export const cache = new InMemoryCache({
  typePolicies: {},
  addTypename: false,
});

const defaultOptions: DefaultOptions = {
  query: {
    fetchPolicy: 'network-only',
  },
  mutate: {
    fetchPolicy: 'network-only',
  },
};

export const mainClient = new ApolloClient({
  link: postgraphileHttpLink,
  defaultOptions,
  cache: new InMemoryCache({
    addTypename: false,
    typePolicies: {},
  }),
});
