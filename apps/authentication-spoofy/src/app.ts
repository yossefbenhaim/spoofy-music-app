import express, { Application } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './routers/appRouter';
import { loginMiddleware } from './tRPC/loggingMiddleware';
import { createContext } from './tRPC/context';
dotenv.config();
import cookieParser from 'cookie-parser';

const app: Application = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  '/api',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
    onError({ error }) {
      console.error('tRPC Error:', error);
    },
  })
);
export default app;
