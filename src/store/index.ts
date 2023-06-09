import { configureStore } from "@reduxjs/toolkit";
import cameraSlice from "./cameraSlice";
import transcriptSlice from "./transcriptSlice";

export const store = configureStore({
  reducer: {
    camera: cameraSlice,
    transcript: transcriptSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
