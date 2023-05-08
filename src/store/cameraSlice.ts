import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CameraState {
  cameraStarted: boolean;
  warning: boolean;
}

const initialState: CameraState = {
  cameraStarted: true,
  warning: false,
};

export const streamSlice = createSlice({
  name: "stream",
  initialState,
  reducers: {
    setCameraStart: (state, action: PayloadAction<boolean>) => {
      state.cameraStarted = action.payload;
    },
    setCameraWarning: (state, action: PayloadAction<boolean>) => {
      state.warning = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCameraStart, setCameraWarning } = streamSlice.actions;

export default streamSlice.reducer;
