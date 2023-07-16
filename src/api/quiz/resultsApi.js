import { createAsyncThunk } from "@reduxjs/toolkit";

export const postResult = createAsyncThunk(
  "post/result",
  async (payload, thunkApi) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/result`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    const responseData = await response.json();
    if (response.status !== 200) {
      return thunkApi.rejectWithValue({
        message: "Something went wrong. Please try again later.",
      });
    }
    return responseData["resultData"];
  }
);
