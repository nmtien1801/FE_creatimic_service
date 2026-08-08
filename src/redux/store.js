import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import postReducer from "./postSlice";
import staffReducer from "./staffSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    staff: staffReducer,
  },
});
