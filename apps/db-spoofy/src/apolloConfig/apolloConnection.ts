import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  DefaultOptions,
  split,
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import { WebSocket } from 'ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { createClient } from 'graphql-ws';
import { Kind } from 'graphql';
export const postgraphileHttpLink = new HttpLink({
  uri: 'http://localhost:8080/graphql',
});
const postgraphileWsLink = new WebSocketLink(
  new SubscriptionClient(
    'ws://localhost:8080/graphql',
    {
      reconnect: true,
      connectionCallback(error) {
        error && console.error(error);
      },
    },
    WebSocket
  )
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
