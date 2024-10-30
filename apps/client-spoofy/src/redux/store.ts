import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { SliceName } from 'models/enums/sliceName';

import usersReducer from './slice/users';
import songsReducer from './slice/songs';
import artistsReducer from './slice/artist';
import currentSongReducer from './slice/currentPlaylist';
import currentUserReducer from './slice/currentUser';
import favoritesSongReducer from './slice/favorites';
import PlaylistsReducer from './slice/playlists';
import storageReducer from 'redux-persist/lib/storage';
import themeModeReducer from './slice/themeMode';
import authReducer from './slice/auth';
import currentCoordinatesAddressReducer from './slice/currentCoordinatesSelectAddress';

const persistConfig = {
  key: 'root',
  type: storageReducer,
  storage: storageReducer,
  whitelist: [
    SliceName.currentUser,
    SliceName.songs,
    SliceName.favorites,
    SliceName.playlists,
    SliceName.users,
    SliceName.themeMode,
    SliceName.auth,
  ],
};

const rootReducer = combineReducers({
  [SliceName.currentCoordinatesAddress]: currentCoordinatesAddressReducer,
  [SliceName.currentPlaylist]: currentSongReducer,
  [SliceName.currentUser]: currentUserReducer,
  [SliceName.favorites]: favoritesSongReducer,
  [SliceName.playlists]: PlaylistsReducer,
  [SliceName.themeMode]: themeModeReducer,
  [SliceName.artist]: artistsReducer,
  [SliceName.songs]: songsReducer,
  [SliceName.users]: usersReducer,
  [SliceName.auth]: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

const persistodStore = persistStore(store);
export type AddDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
export { store, persistodStore };
