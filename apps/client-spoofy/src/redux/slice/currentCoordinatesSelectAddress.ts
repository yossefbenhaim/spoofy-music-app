import { SliceName } from '@models/enums/sliceName';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface currentCoordinatesSelectPlace {
  coordinates: number[];
}

const initialState: currentCoordinatesSelectPlace = {
  coordinates: [35.0818155, 31.4117257],
};

const CurrentCoordinatesSelectAddress = createSlice({
  name: SliceName.currentCoordinatesAddress,
  initialState,
  reducers: {
    setCoordinates(state, action: PayloadAction<number[]>) {
      state.coordinates = action.payload;
    },

    restCoordinates() {
      return initialState;
    },
  },
});

export const { setCoordinates, restCoordinates } =
  CurrentCoordinatesSelectAddress.actions;
export default CurrentCoordinatesSelectAddress.reducer;
