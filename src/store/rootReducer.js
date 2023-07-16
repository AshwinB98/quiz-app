import { combineReducers } from "@reduxjs/toolkit";
import { quizReducer } from "./quiz/quiz.reducer";
import { resultReducer } from "./result/result.reducer";

export const rootReducer = combineReducers({
  quiz: quizReducer,
  result: resultReducer,
});
