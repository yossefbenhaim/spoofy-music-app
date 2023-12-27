import cors from 'cors';
import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { logginMiddleware } from './server/loggingMiddleware';
import { appRouter } from './server';
import { createContext } from './context';

require('dotenv').config();

const app = express();

app.use(
  '/',
  trpcExpress.createExpressMiddleware({
    middleware: (req, res, next) => {
      cors(), logginMiddleware(req, res, next);
    },
    router: appRouter,
    onError: (e) => {
      //@ts-ignore
      const stack = e.error.cause?.shape?.data?.stack ?? e.error?.stack;
      const serviceTrace: string[] =
        stack
          .match(/apps\\([-\w]+)/g)
          ?.map((match: string) => match.split('\\')[1]) ?? [];

      if (!serviceTrace.includes('typs')) {
        serviceTrace.unshift('typs');
      }
    },
    createContext,
  })
);

app.listen(process.env['NX_TRPC_PORT'], () => {
  console.log(`Server started on port: ${process.env['NX_TRPC_PORT']}`);
});
