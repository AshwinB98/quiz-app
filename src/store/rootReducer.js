import { combineReducers } from "@reduxjs/toolkit";
import { quizReducer } from "./quiz/quiz.reducer";

export const rootReducer = combineReducers({
  quiz: quizReducer,
});
