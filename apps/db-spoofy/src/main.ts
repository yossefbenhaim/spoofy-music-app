import cors from 'cors';
import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { logginMiddleware } from './server/loggingMiddleware';
import { appRouter } from './server';
import { createContext } from './context';
import { test } from '../src/server/Routers/testSubscription';
import { applyWSSHandler } from '@trpc/server/adapters/ws';
import ws from 'ws';

require('dotenv').config();

// test();
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

      if (!serviceTrace.includes('backend-spoofy')) {
        serviceTrace.unshift('backend-spoofy');
      }
    },
    createContext,
  })
);

const httpServer = app.listen(process.env['NX_TRPC_PORT'], () => {
  console.log(`HTTP Server started on port: ${process.env['NX_TRPC_PORT']}`);
});

const wss = new ws.Server({ noServer: true });
const handler = applyWSSHandler({
  wss,
  router: appRouter,
  createContext,
});

httpServer.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

wss.on('connection', (ws) => {
  console.log(`➕➕ Connection (${wss.clients.size})`);
  ws.once('close', () => {
    console.log(`➖➖ Connection (${wss.clients.size})`);
  });
});

process.on('SIGTERM', () => {
  console.log('SIGTERM');
  handler.broadcastReconnectNotification();
  wss.close();
});

console.log('✅ WebSocket Server listening on ws://localhost:3000');
