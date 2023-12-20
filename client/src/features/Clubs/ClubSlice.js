import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const config = {
  headers: {
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
}

export const addClub = createAsyncThunk("newclub/addClub", async (payload) => {
  try {
    const formData = new FormData();
    formData.append("name", payload.clubName);
    formData.append("description", payload.clubDescription);
    const response = await axios.post("http://localhost:8082/newclub",formData,config);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err; // Propagate error
  }
});

export const getClubs = createAsyncThunk("allclubs/getclubs", async () => {
  try {
    const response = await axios.get("http://localhost:8082/allclubs", config);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error; // Propagate error
  }
});

export const assocPersidant = createAsyncThunk(
  "associatepres/assocPersidant",
  async (payload) => {
    try {
      const { clubId } = payload;
      const formData = new FormData();
      formData.append("role", "president");
      formData.append("name", payload.firstName + " " + payload.lastName);
      const response = await axios.post(
        `http://localhost:8082/associatepres/${clubId}/yay`,
        formData,
        config
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getMembers = createAsyncThunk(
  "clubmembers/getMembers",
  async (payload) => {
    const { clubId } = payload;
    try {
      const response = await axios.get(`http://localhost:8082/clubmembers/${clubId}`,config);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const ClubSlice = createSlice({
  name: "club",
  initialState: {
    clubs: [],
    members: [],
  },
  reducers: {
    setClubs: (state, action) => {
      state.clubs = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getClubs.fulfilled, (state, action) => {
      state.clubs = [...action.payload];
    })
    .addCase(getMembers.fulfilled, (state, action)=> {
      state.members = [...action.payload];
    })
  },
});

export default ClubSlice.reducer;

export const getAllClubs = (state) => state.club.clubs;
export const getAllMembers = (state) => state.club.members;

export const getPresidentByClubId = (state, clubId) => {
  return state.club.clubs.find((c) => c.id == clubId);
};
