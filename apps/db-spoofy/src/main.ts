import cors from 'cors';
import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { logginMiddleware } from './server/loggingMiddleware';
import { appRouter } from './server';
import { createContext } from './context';
import { mainClient } from '../src/apolloConfig/apolloConnection';
import { gql } from '@apollo/client';
const ADD_PLAYLIST_SUBSCRIPTION = gql`
  subscription MySubscription {
    listen(topic: "new_playlist") {
      relatedNodeId
      relatedNode {
        ... on Playlist {
          __typename
          id
          name
          creatorId
          createdPlaylist
        }
      }
    }
  }
`;
require('dotenv').config();
// mainClient.subscribe({ query: ADD_PLAYLIST_SUBSCRIPTION }).subscribe({
//   next(data) {
//     console.log(data.data.data.listen.relatedNode);
//   },
// });
// console.log('-------------yossef-------------');

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

app.listen(process.env['NX_TRPC_PORT'], () => {
  console.log(`Server started on port: ${process.env['NX_TRPC_PORT']}`);
});
