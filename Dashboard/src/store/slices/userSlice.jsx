import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../thunks/fetchApi";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const usersReducer = userSlice.reducer;