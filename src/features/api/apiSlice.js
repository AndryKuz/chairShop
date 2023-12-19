import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import {BASE_URL} from '../../constans/apiConfig';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: () => `/products`,
        }),
    }),

});




export const { useGetProductQuery} = productApi;