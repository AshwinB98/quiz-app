import { createSelector } from "reselect";

const resultReducer = (state) => state.result;

export const selectAllResults = createSelector(
  [resultReducer],
  (data) => data.result
);

export const selectResultLoading = createSelector(
  [resultReducer],
  (data) => data.isLoading
);

export const selectResultError = createSelector(
  [resultReducer],
  (data) => data.error
);
