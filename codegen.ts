import type { CodegenConfig } from '@graphql-codegen/cli';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:8080/graphql',
  generates: {
    './generatedTypes.ts': {
      plugins: ['typescript'],
    },
  },
};

export default config;

// npx graphql-codegen --config ./codegen.ts
