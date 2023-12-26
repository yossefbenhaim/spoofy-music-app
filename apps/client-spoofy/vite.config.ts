/// <reference types='vitest' />
import { defineConfig } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';
// import dotenv from 'dotenv';
import viteTsConfigPath from 'vite-tsconfig-paths';
export default defineConfig(({ mode }) => {
  //   const env = dotenv.config({ path: `.env.${mode}` }).parsed;

  return {
    cacheDir: '../../node_modules/.vite/client-spoofy',
    envDir: './environment',
    envPrefix: 'NX',
    server: {
      port: 4200,
      host: 'localhost',
      fs: {
        allow: ['../'],
      },
    },

    preview: {
      port: 4300,
      host: 'localhost',
    },
    //TODO:fix the problem with map
    // define: {
    //     'process.env': JSON.stringify(env),
    // },

    plugins: [
      react(),
      nxViteTsPaths(),
      viteTsConfigPath({
        root: '../../',
      }),
    ],
  };
});
