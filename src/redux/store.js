import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./slices";

export const store = configureStore({
    reducer: {
       user:  userSliceReducer
    }
});
