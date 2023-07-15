import { createSelector } from "reselect";

export const quizReducer = (state) => state.quiz;

export const selectAllQuestions = createSelector(
  [quizReducer],
  (quiz) => quiz.questions
);

export const selectQuestionsIsLoading = createSelector(
  [quizReducer],
  (quiz) => quiz.isLoading
);
