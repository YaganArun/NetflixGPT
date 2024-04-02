import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSice";
import moviesReducer from "../slice/moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default appStore;
