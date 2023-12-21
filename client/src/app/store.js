import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice'
import { apiSlice } from "./api/apiSlice";
import ClubReducer from "../features/Clubs/ClubSlice"
import activityReducer from "../features/Activities/activitySlice"

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        user: userReducer,
        club: ClubReducer,
        activity: activityReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})