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

export const cameraSlice = createSlice({
  name: "camera",
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
export const { setCameraStart, setCameraWarning } = cameraSlice.actions;

export default cameraSlice.reducer;
