import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../constants/baseUrl';
import { INews, INewsDetails } from '../../types/news';

export const newsApi = createApi({
    reducerPath: 'newsApi',

    baseQuery: fetchBaseQuery({ baseUrl }),

    endpoints: (builder) => ({
        getNewsGeneralInfo: builder.query<INews[], void>({
            query: () => '/api/news',
        }),
        getNewsDetails: builder.query<INewsDetails, string>({
            query: (id) => `/api/news/${id}`
        }),
    }),
});

export const { 
    useGetNewsGeneralInfoQuery, 
    useGetNewsDetailsQuery
} = newsApi;
export default newsApi;