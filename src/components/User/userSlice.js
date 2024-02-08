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
  name: "user",
  initialState: {
    currentUser: null,
    showForm: false,
    formType: "signup",
    cart: [],
    favorite: [],
    showModalFavorite: null,
    showModalCart: true,
  },
  reducers: {
    toggleForm: (state, { payload }) => {
      state.showForm = payload;
    },
    toggleFormType: (state, { payload }) => {
      state.formType = payload;
    },
    toggleFormFavorite: (state, {payload}) => {
      state.showModalFavorite = payload;
    },
    toggleModalCart: (state, {payload}) => {
      state.showModalCart = payload;
    },
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];

      const foundId = state.cart.find(({ id }) => payload.id === id);

      if (foundId) {
        newCart = newCart.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item
        );
      } else {
        newCart.push({ ...payload, quantity: 1 });
      }
      state.cart = newCart;
    },
    addItemToFavorite: (state, { payload }) => {
      let newItem = [...state.favorite];
     
      const findItemToFavorite = state.favorite.some(
        ({ id }) => id === payload.id
      );

      if(findItemToFavorite) {
        newItem = newItem.filter(({id}) => id !== payload.id);
        state.showModalFavorite = false;
      } else {
        newItem.push({...payload});
        state.showModalFavorite = true;
      }

      state.favorite = newItem;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
      });
    //   .addCase(updateUser.fulfilled, (state, { payload }) => {
    //     state.currentUser = payload;
    //   });
  },
});

export const { toggleForm, toggleFormType, addItemToCart, addItemToFavorite, toggleFormFavorite, toggleModalCart } =
  userSlice.actions;

export default userSlice.reducer;
