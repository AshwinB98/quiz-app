import { createSlice } from "@reduxjs/toolkit";
import { postResult } from "../../api/quiz/resultsApi";

const RESULT_INITIAL_STATE = {
  isLoading: false,
  result: [],
  error: null,
};

const resultSlice = createSlice({
  name: "result",
  initialState: RESULT_INITIAL_STATE,
  reducers: {
    clearResults: (state) => {
      state.result = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postResult.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postResult.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.result = payload;
    });
    builder.addCase(postResult.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.isLoading = false;
    });
  },
});

export const { clearResults } = resultSlice.actions;

export const resultReducer = resultSlice.reducer;
