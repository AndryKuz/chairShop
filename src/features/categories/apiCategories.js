import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import {BASE_URL} from '../../constans/apiConfig';

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `/categories`,
        }),
    }),

});

export const { useGetCategoriesQuery } = categoriesApi;