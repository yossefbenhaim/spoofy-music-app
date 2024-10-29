import cors from 'cors';
import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { loginMiddleware } from './middleware/loggingMiddleware';
import { appRouter } from './routers/appRouter';
import { createContext } from './tRPC/context';
import { validateTokenMiddleware } from './middleware/validateToken';

require('dotenv').config();

const app = express();

app.use(
  '/',
  trpcExpress.createExpressMiddleware({
    middleware: (req, res, next) => {
      cors(),
        validateTokenMiddleware(req, res, next),
        loginMiddleware(req, res, next);
    },
    router: appRouter,
    onError({ error }: { error: Error }) {
      console.error('tRPC Error:', error);
    },
    createContext,
  })
);

export default app;
