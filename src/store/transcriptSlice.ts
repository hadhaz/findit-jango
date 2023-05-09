import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface TranscriptState {
  text: string;
  date: string;
  pace: number;
  structure: number;
  overallScore: number;
  smoothness: number;
  feedbacks: Feedback;
  time: number;
  topic: string;
}

export type Feedback = {
  issue: string;
  feedback: string;
}[];

const initialState: TranscriptState = {
  text: "",
  date: "",
  pace: 0,
  structure: 0,
  smoothness: 0,
  overallScore: 0,
  feedbacks: [],
  time: 0,
  topic: "None",
};

export const transcriptSlice = createSlice({
  name: "transcript",
  initialState,
  reducers: {
    addTranscript: (
      state,
      action: PayloadAction<{
        text: string;
        date: string;
        time: number;
      }>
    ) => {
      state.text = action.payload.text;
      state.date = action.payload.date;
      state.time = action.payload.time;
    },
    analyze: (
      state,
      action: PayloadAction<{
        smoothness: number;
        structure: number;
        overallScore: number;
        pace: number;
        topic: string;
      }>
    ) => {
      state.smoothness = action.payload.smoothness;
      state.structure = action.payload.structure;
      state.pace = action.payload.pace;
      state.overallScore = action.payload.overallScore;
      state.topic = action.payload.topic;
    },
    feedback: (state, action: PayloadAction<Feedback>) => {
      state.feedbacks = action.payload;
    },
  },
});

export const { addTranscript, analyze, feedback } = transcriptSlice.actions;
export default transcriptSlice.reducer;
