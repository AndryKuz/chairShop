import { createSlice } from "@reduxjs/toolkit";


export const modalSlice = createSlice({
  name: "user",
  initialState: {
    cart: [],
    showModalCart: null,
    favorite: [],
    showModalFavorite: null,
    
  },
  reducers: {
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];

      const foundId = state.cart.find(({ id }) => id === payload.id);
      if (foundId) {
        newCart = newCart.map((item) => {
          return (item.id === payload.id)
            ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item;
        });
      } else {
        newCart.push({ ...payload, quantity: 1 });
      }
      state.cart = newCart;
    },
    addItemToFavorite: (state, { payload }) => {
      let newItem = [...state.favorite];

      const findItemToFavorite = state.favorite.find(
        ({ id }) => id === payload.id
      );

      if (findItemToFavorite) {
        newItem = newItem.map((item) => {
          return (item.id === payload.id)
          ? {...item, quantity: payload.quantity || item.quantity + 1}
          : item;
        });
        state.showModalFavorite = false;
      } else {
        newItem.push({ ...payload, quantity: 1 });
        state.showModalFavorite = true;
      }

      state.favorite = newItem;
    },
    removeItemFromFavorite: (state, { payload }) => {
      state.favorite = state.favorite.filter(({id}) =>  id !== payload);
    },
    clearArrayFavorite: (state) => {
      state.favorite = [];
    },
    removeItemFromCart: (state, { payload }) => {
      state.cart = state.cart.filter(({id}) =>  id !== payload);
    },
    toggleModalFavorite: (state, { payload }) => {
      state.showModalFavorite = payload;
    },
    toggleModalCart: (state, { payload }) => {
      state.showModalCart = payload;
    },
  },

  extraReducers: (builder) => {},
});

export const {
  addItemToCart,
  addItemToFavorite,
  removeItemFromFavorite,
  removeItemFromCart,
  toggleModalCart,
  toggleModalFavorite,
  clearArrayFavorite,

} = modalSlice.actions;

export default modalSlice.reducer;
