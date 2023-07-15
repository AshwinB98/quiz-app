import { createSlice } from "@reduxjs/toolkit";
import { fetchQuiz } from "../../api/quiz/quizApi";

const QUIZ_INITIAL_STATE = {
  isLoading: false,
  questions: [],
  error: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState: QUIZ_INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuiz.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchQuiz.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.questions = payload;
    });
    builder.addCase(fetchQuiz.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.isLoading = false;
    });
  },
});

export const quizReducer = quizSlice.reducer;
