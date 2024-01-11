import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceName } from 'models/enums/sliceName';
import { Artist } from 'models/interface/artist';

interface ArtistsSlice {
  artist: Artist[];
}

const initialState: ArtistsSlice = {
  artist: [],
};

const Artists = createSlice({
  name: SliceName.artist,
  initialState,
  reducers: {
    setArtists: (state, action: PayloadAction<Artist[]>) => {
      state.artist = action.payload;
    },
  },
});

export const { setArtists } = Artists.actions;
export default Artists.reducer;
