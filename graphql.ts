import { initGraphQLTada } from 'gql.tada';
import type { introspection } from './graphql-env';

export const spoofyGraphql = initGraphQLTada<{
  introspection: typeof introspection;
}>();
