import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlaylistSong } from '@spoofy/spoofy-types';
import { SliceName } from 'models/enums/sliceName';
import { Playlist } from 'models/interface/playlist';

interface PlaylistsSlice {
  playlists: Playlist[];
}

const initialState: PlaylistsSlice = {
  playlists: [],
};

const Playlists = createSlice({
  name: SliceName.playlists,
  initialState,
  reducers: {
    setPlaylists: (state, action: PayloadAction<Playlist[]>) => {
      state.playlists = action.payload;
    },

    addPlaylist: (state, action: PayloadAction<Omit<Playlist, 'songs'>>) => {
      const newPlaylist: Playlist = {
        id: action.payload.id,
        name: action.payload.name,
        creatorId: action.payload.creatorId,
        songs: [],
      };
      const isExist = state.playlists.some(
        (playlist) => playlist.id === newPlaylist.id
      );
      if (!isExist) {
        state.playlists.push(newPlaylist);
      }
    },

    updatePlaylistName: (
      state,
      action: PayloadAction<Pick<Playlist, 'id' | 'name'>>
    ) => {
      const { id, name } = action.payload;
      const currentPlaylist: Playlist = state.playlists.find(
        (playlist) => playlist.id === id
      )!;
      if (currentPlaylist) {
        currentPlaylist.name = name;
      }
    },

    updatePlaylistSongs: (state, action: PayloadAction<PlaylistSong>) => {
      const { playlistId, songId } = action.payload;

      const currentPlaylist = state.playlists.find(
        (playlist) => playlist.id === playlistId
      );

      if (currentPlaylist) {
        const existSong = currentPlaylist.songs.some((song) => song === songId);
        if (!existSong) {
          currentPlaylist.songs.push(songId);
        }
      }
    },

    deleteSongFromPlaylist: (state, action: PayloadAction<PlaylistSong>) => {
      const { playlistId, songId: songsId } = action.payload;
      const currentPlaylist: Playlist | undefined = state.playlists.find(
        (playlist) => playlist.id === playlistId
      );
      if (currentPlaylist) {
        const index = currentPlaylist.songs.findIndex(
          (song) => song === songsId
        );
        if (index !== -1) currentPlaylist.songs.splice(index, 1);
      }
    },
  },
});

export const {
  addPlaylist,
  setPlaylists,
  updatePlaylistSongs,
  updatePlaylistName,
  deleteSongFromPlaylist,
} = Playlists.actions;
export default Playlists.reducer;
