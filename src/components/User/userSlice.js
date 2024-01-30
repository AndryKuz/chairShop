import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../../constans/apiConfig";

export const createUser = createAsyncThunk(
  "users/createUser",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/users`, payload);
      return data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, payload);
      const login = await axios(`${BASE_URL}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${res.data.access_token}`,
        },
      });

      return login.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    showForm: false,
    formType: 'signup',
    // cart: [],
  },
  reducers: {
    toggleForm: (state, { payload }) => {
      state.showForm = payload;
    },
    toggleFormType: (state, { payload }) => {
        state.formType = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
      })
    //   .addCase(updateUser.fulfilled, (state, { payload }) => {
    //     state.currentUser = payload;
    //   });
  },
});

export const { toggleForm, toggleFormType } = userSlice.actions;

export default userSlice.reducer;
