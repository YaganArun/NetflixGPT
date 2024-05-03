import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    upcomingMovies: null,
    trailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    removeNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = null;
    },
    removePopularMovies: (state, action) => {
      state.popularMovies = null;
    },
    removeUpcomingMovies: (state) => {
      state.upcomingMovies = null;
    },
    removeTrailer: (state, action) => {
      state.trailer = null;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addUpcomingMovies,
  addTrailer,
  removeNowPlayingMovies,
  removePopularMovies,
  removeUpcomingMovies,
  removeTrailer,
} = moviesSlice.actions;
export default moviesSlice.reducer;
