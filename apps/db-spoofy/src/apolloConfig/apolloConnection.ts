import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  DefaultOptions,
  split,
} from '@apollo/client';
import { WebSocket } from 'ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { Kind } from 'graphql';
export const postgraphileHttpLink = new HttpLink({
  uri: 'http://localhost:8080/graphql',
});
const postgraphileWsLink = new GraphQLWsLink(
  createClient({
    url: 'ws://localhost:8080/graphql',
    webSocketImpl: WebSocket,
  })
);

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === Kind.OPERATION_DEFINITION &&
      definition.operation === 'subscription'
    );
  },
  postgraphileWsLink,
  postgraphileHttpLink
);

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
  link,
  defaultOptions,
  cache: new InMemoryCache({
    addTypename: false,
    typePolicies: {},
  }),
});
