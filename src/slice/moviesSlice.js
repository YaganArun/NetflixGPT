import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    removeNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = null;
    },
  },
});

export const { addNowPlayingMovies, addTrailer, removeNowPlayingMovies } =
  moviesSlice.actions;
export default moviesSlice.reducer;
