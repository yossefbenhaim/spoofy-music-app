import { applyWSSHandler } from '@trpc/server/adapters/ws';
import ws from 'ws';
import app from './app';
import { appRouter } from './routers/appRouter';
import { createContext } from './tRPC/context';

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
