import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    info: null,
  },
  reducers: {
    addUser: (state, action) => {
      return {
        isLoggedIn: true,
        info: action.payload,
      };
    },
    removeUser: (state) => {
      return {
        isLoggedIn: false,
        info: null,
      };
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
