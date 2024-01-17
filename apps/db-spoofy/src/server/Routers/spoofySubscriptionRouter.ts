import { router, publicProcedure } from '../trpc';
import {
  CreateSongInput,
  Mutation,
  Subscription,
} from '../../types/spoofyTypes';
import { mainClient } from '../../apolloConfig/apolloConnection';
import { z } from 'zod';
import { observable } from '@trpc/server/observable';
import { EventEmitter } from 'events';
import { gql } from '@apollo/client';

const ee = new EventEmitter();

export const spoofySubscrptionRouter = router({
  addPlaylistSongSubacription: publicProcedure.subscription(() => {
    return observable<any>((emit) => {
      const onAdd = (data: any) => {
        // emit data to client
        emit.next(data);
      };
    });
  }),
});

export type AppRouter = typeof spoofySubscrptionRouter;
