import { configureStore } from "@reduxjs/toolkit";


import { productApi } from "../../features/api/apiSlice";
// import { categoriesSlice } from "../../features/categories/categoriesSlice";//import { here } from "../../features/categories/here";
import userSlice from "../User/userSlice";
import categoriesSlice from "../../features/categories/categoriesSlice";
import modalSlice from "../modal/modalSlice";





export const store = configureStore({
    reducer: {
        modal: modalSlice,
        user: userSlice,
        categories: categoriesSlice,
        [productApi.reducerPath]: productApi.reducer,
        // [categoriesSlice.reducerPath]: categoriesSlice.reducer,//[here.reducerPath]: here.reducer,
        
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(productApi.middleware)// middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(productApi.middleware, here.middleware),
    
})

