import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuiz = createAsyncThunk(
  "fetch/quiz",
  async (payload, thunkApi) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/questions`
    );
    const responseData = await response.json();
    if (response.status !== 200) {
      return thunkApi.rejectWithValue({
        message: "Failed to fetch the question. Please try again later.",
      });
    }
    return responseData["data"];
  }
);
