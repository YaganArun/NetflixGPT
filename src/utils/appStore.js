import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;
