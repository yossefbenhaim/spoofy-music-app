import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  DefaultOptions,
} from '@apollo/client';
import { BatchHttpLink } from '@apollo/client/link/batch-http';

export const postgraphileHttpLink = new BatchHttpLink({
  uri: process.env['NX_POSTGRAPHILE_ROUTE'],
  batchMax: 20 || 1, //TODO:20 in env
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
  cache,
});
