import { configureStore } from "@reduxjs/toolkit";
import monitorReducers from "./features/monitorSlice";

const myStore = configureStore({
  reducer: {
    monitorReducers
  },
});

export default myStore;
