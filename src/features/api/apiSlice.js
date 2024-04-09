import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import {BASE_URL} from '../../constans/apiConfig';

export const buildUrl = (url, params) => {
    let urlWithParams = url;
    if (params && typeof params === 'object') {
        Object.entries(params).forEach(([key, value], i) => {
          const sign = !i ? '?' : '&';
          urlWithParams += `${sign}${key}=${value}`;
        });
      }
    
      return urlWithParams;
}

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: ({ id }) => `/products/${id}`,
            providesTags: ['Product'],
        }),
        getProducts: builder.query({
            query: (params) => buildUrl('/products', params),
            providesTags: ['Products'],
        }),
        
    }),

});




export const { useGetProductQuery, useGetProductsQuery} = productApi;