import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const config = {
  headers: {
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
};

const BASE_URL = "http://localhost:8080";

export const addClub = createAsyncThunk("newclub/addClub", async (payload) => {
  try {
    const formData = new FormData();
    formData.append("name", payload.clubName);
    formData.append("description", payload.clubDescription);
    const response = await axios.post(`${BASE_URL}/newclub`, formData, config);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
});

export const getClubs = createAsyncThunk("allclubs/getclubs", async () => {
  try {
    const response = await axios.get(`${BASE_URL}/allclubs`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});
export const getGuestClubs = createAsyncThunk("allclubs/getGuestClubs", async () => {
  try {
    const response = await axios.get(`${BASE_URL}/allclubs`);
    console.log(response.data)
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
      formData.append("role", "President");
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

export const newMember = createAsyncThunk(
  "newmember/newMember",
  async (payload) => {
    try {
      const { clubId } = payload;
      const formData = new FormData();
      formData.append("club_id", clubId);
      formData.append("role", "member");
      formData.append("name", payload.firstName + " " + payload.lastName);
      const response = await axios.post(
        `${BASE_URL}/newmember`,
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
      const response = await axios.get(
        `${BASE_URL}/clubmembers/${clubId}`,
        config
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getPresident = createAsyncThunk(
  "clubPresident/getPresident",
  async (payload) => {
    const { clubId } = payload;
    try {
      const response = await axios.get(
        `${BASE_URL}/clubpresident/${clubId}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const sendDemande = createAsyncThunk(
  "newdemand/sendDemande",
  async (payload) => {
    try {
      const formData = new FormData();
      formData.append("clubId", payload.clubId);
      formData.append("role", "member");
      formData.append("name", payload.firstName + " " + payload.lastName);
      const response = await axios.post(
        `${BASE_URL}/newdemand`,
        formData
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const acceptDemand = createAsyncThunk(
  "acceptdemand/acceptDemand",
  async (payload) => {
    try {
      const { demand_id } = payload;
      const response = await axios.post(
        `${BASE_URL}/acceptdemand/${demand_id}`,
        null,
        config
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const declineDemand = createAsyncThunk(
  "declinedemand/declineDemand",
  async (payload) => {
    try {
      const { demand_id } = payload;
      const response = await axios.post(
        `${BASE_URL}/declinedemand/${demand_id}`,
        null,
        config
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getDemandes = createAsyncThunk(
  "waitingdemands/getDemandes",
  async (payload) => {
    try {
      const { clubId } = payload;
      const response = await axios.get(
        `${BASE_URL}/waitingdemands/${clubId}`,
        config
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const sendReservation = createAsyncThunk(
  "newreservation/sendReservation",
  async (payload) => {
    try {
      const formData = new FormData();
      formData.append("club_id", payload.clubId);
      formData.append("date", payload.date);
      formData.append("salle", payload.salle);
      formData.append("EventName", payload.reason);
      formData.append("Participants", payload.participant);
      const response = await axios.post(
        `${BASE_URL}/newreservation`,
        formData,
        config
      );
      console.log(response.data);
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
    demandes: [],
    president: {},
    clubStatus: "idle",
    memberStatus: "idle",
  },
  reducers: {
    setClubs: (state, action) => {
      state.clubs = action.payload;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(getClubs.fulfilled, (state, action) => {
        state.clubStatus = "success";
        state.clubs = [...action.payload];
      })
      .addCase(getClubs.pending, (state) => {
        state.clubStatus = "loading";
      })
      .addCase(getMembers.pending, (state) => {
        state.memberStatus = "loading";
      })
      .addCase(getMembers.fulfilled, (state, action) => {
        state.memberStatus = "success";
        state.members = [...action.payload];
      })
      .addCase(getPresident.fulfilled, (state, action) => {
        state.president = action.payload;
      })
      .addCase(getDemandes.fulfilled, (state, action) => {
        state.demandes = action.payload;
      });
  },

});

export default ClubSlice.reducer;

export const getAllClubs = (state) => state.club.clubs;
export const getAllMembers = (state) => state.club.members;

export const getClubStatus = (state) => state.club.clubStatus;
export const getMemberStatus = (state) => state.club.memberStatus;
export const getClubById = (state, clubId) =>
  state.club.clubs.find((club) => club.id == clubId);
export const getClubPresident = (state) => state.club.president;
export const getAllDemandes = (state) => state.club.demandes;

export const getPresidentByClubId = (state, clubId) => {
  return state.club.clubs.find((c) => c.id == clubId);
};
export const getMembersCount = (state) => state.club.members.length;
export const getDemandsCount = (state) => state.club.demandes.length;
