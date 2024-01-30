
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { BASE_URL } from "../../constans/apiConfig";
import axios from "axios";

export const getCategory = createAsyncThunk(
    "category/getCategory",
    async (_, thunkAPI) => {
      const {data} = await axios.get(`${BASE_URL}/categories`);
      return data;
  
    }
  );
  



export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategory.fulfilled, (state, { payload }) => {
        state.list = payload;
        state.isLoading = false;
      })
      .addCase(getCategory.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default categoriesSlice.reducer;

// export const categoriesSlice = createApi({
//     reducerPath: 'categoriesApi',
//     baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
//     endpoints: (builder) => ({
//         getCategories: builder.query({
//             query: () => `/categories`,
//         }),
//     }),

// });

// export const { useGetCategoriesQuery } = categoriesSlice;
