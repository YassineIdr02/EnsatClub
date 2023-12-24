import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const config = {
  headers: {
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
}

const BASE_URL = "http://localhost:8080";

export const addClub = createAsyncThunk("newclub/addClub", async (payload) => {
  try {
    const formData = new FormData();
    formData.append("name", payload.clubName);
    formData.append("description", payload.clubDescription);
    const response = await axios.post(`${BASE_URL}/newclub`,formData,config);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err; 
  }
});

export const getClubs = createAsyncThunk("allclubs/getclubs", async () => {
  try {
    const response = await axios.get(`${BASE_URL}/allclubs`, config);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error; 
  }
});

export const assocPresident = createAsyncThunk(
  "associatepres/assocPresident",
  async (payload) => {
    try {
      const { clubId } = payload;
      const formData = new FormData();
      formData.append("role", "president");
      formData.append("name", payload.firstName + " " + payload.lastName);
      const response = await axios.post(
        `${BASE_URL}/associatepres/${clubId}/yay`,
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
      const response = await axios.get(`${BASE_URL}/clubmembers/${clubId}`,config);
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
    clubStatus: "idle",
    memberStatus: "idle",
  },
  reducers: {
    setClubs: (state, action) => {
      state.clubs = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getClubs.fulfilled, (state, action) => {
      state.clubStatus = "success";
      state.clubs = [...action.payload];
    })
    .addCase(getClubs.pending, (state, action) => {
      state.clubStatus = "loading";
    })
    .addCase(getMembers.pending, (state, action) => {
      state.memberStatus = "loading";
    } )
    .addCase(getMembers.fulfilled, (state, action)=> {
      state.memberStatus = "success";
      state.members = [...action.payload];
    })
  },
});

export default ClubSlice.reducer;

export const getAllClubs = (state) => state.club.clubs;
export const getAllMembers = (state) => state.club.members;

export const getClubStatus = (state) => state.club.clubStatus;
export const getMemberStatus = (state) => state.club.memberStatus;

export const getPresidentByClubId = (state, clubId) => {
  return state.club.clubs.find((c) => c.id == clubId);
};
