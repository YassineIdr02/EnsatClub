import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:8080";
const config = {
  headers: {
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
};

const initialState = {
  activities: [],
  status: "idle", // Possible values: idle, loading, succeeded, failed
};

export const addActivity = createAsyncThunk(
  "newActivity/addActivity",
  async (activityData) => {
    try {
      const formData = new FormData();
      formData.append("club_id", activityData.clubId);
      formData.append("content", activityData.content);
      formData.append("file", activityData.file);

      const response = await axios.post(
        `${BASE_URL}/newActivity`,
        formData,
        config
      );
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error; // Propagate the error for handling in components or elsewhere
    }
  }
);

export const getActivities = createAsyncThunk(
  "clubactivities/getActivities",
  async (activityData) => {
    try {
      console.log(activityData);
      const response = await axios.get(`${BASE_URL}/clubactivities/${activityData.clubId}`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error; // Propagate the error for handling in components or elsewhere
    }
  }
);

const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    // Other reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(getActivities.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getActivities.fulfilled, (state, action) => {
        state.activities = action.payload;
        state.status = "succeeded";
      })
      .addCase(getActivities.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default activitySlice.reducer;
export const getStatus = (state) => state.activity.status;
export const getAllActivities = (state) => state.activity.activities;
export const getActivityById = (state, clubId, postId) => {
  return state.activity.activities.find((activity) => {
    return activity.id == postId && activity.club_id == clubId;
  });
};