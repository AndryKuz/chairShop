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

      const foundId = state.cart.find(({ id, size }) => id === payload.id && size === payload.size);
      if (foundId) {
        newCart = newCart.map((item) => {
          return (item.id === payload.id && item.size === payload.size)
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

      const findItemToFavorite = state.favorite.some(
        ({ id }) => id === payload.id
      );

      if (findItemToFavorite) {
        newItem = newItem.filter(({ id }) => id !== payload.id);
        state.showModalFavorite = false;
      } else {
        newItem.push({ ...payload });
        state.showModalFavorite = true;
      }

      state.favorite = newItem;
    },
    removeItemFromCart: (state, { payload }) => {
      state.cart = state.cart.filter(({ id }) => id !== payload);
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
  removeItemFromCart,
  toggleModalCart,
  toggleModalFavorite,

} = modalSlice.actions;

export default modalSlice.reducer;
