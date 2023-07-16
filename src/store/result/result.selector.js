import { createSelector } from "reselect";

const resultReducer = (state) => state.result;

export const selectAllResults = createSelector(
  [resultReducer],
  (data) => data.result
);

export const isResultLoading = createSelector(
  [resultReducer],
  (data) => data.isLoading
);

export const resultError = createSelector(
  [resultReducer],
  (data) => data.error
);
