import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../../features/api/apiSlice";
import { categoriesApi } from "../../features/categories/apiCategories";





export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(productApi.middleware, categoriesApi.middleware),
    
})

