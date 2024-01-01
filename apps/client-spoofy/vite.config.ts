/// <reference types='vitest' />
import { defineConfig, loadEnv } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';
import viteTsConfigPath from 'vite-tsconfig-paths';

const pathRewrite = (route: string) => {
  return (path: string) => {
    const newPath = path.replace(route, '');
    console.log(`The request ${newPath} is navigate to the ${route} service`);
    return newPath;
  };
};
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

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
      proxy: {
        '/api/db': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          secure: false,
          ws: false,
          rewrite: pathRewrite('/api/db'),
        },
      },
    },

    preview: {
      port: 4300,
      host: 'localhost',
    },
    plugins: [
      react(),
      nxViteTsPaths(),
      viteTsConfigPath({
        root: '../../',
      }),
    ],
  };
});
