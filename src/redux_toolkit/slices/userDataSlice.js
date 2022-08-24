import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(`http://localhost:5000/users`);
  // console.log(response.data);
  return response.data;
});

export const addUserData = createAsyncThunk("users/addUser", async (data) => {
  await axios.post(`http://localhost:5000/users`, data);
});

const defaultUserState = {
  UsersData: [],
};

const userDataSlice = createSlice({
  name: "userData",
  initialState: defaultUserState,
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled]: (state, { payload }) => {
    //   console.log("Fetched UserData Successfully!");
      state.UsersData = [...payload];
    },
    [addUserData.fulfilled]: () => {
    //   console.log("Fetched AddUserData Successfully!");
    },
  },
});

export default userDataSlice.reducer;
