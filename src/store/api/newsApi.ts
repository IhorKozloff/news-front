import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../constants/baseUrl';
import { INews, INewsDetails } from '../../types/news';

export const newsApi = createApi({
    reducerPath: 'newsApi',

    baseQuery: fetchBaseQuery({ baseUrl }),
    // tagTypes: ['Like'],

    endpoints: (builder) => ({
        getNewsGeneralInfo: builder.query<INews[], void>({
            query: () => '/api/news',
        }),
        getNewsDetails: builder.query<INewsDetails, string>({
            query: (id) => `/api/news/${id}`
        }),
        // getNewsbyId: builder.query<ICourseContentResponse, string | undefined>({
        //     query: (id) => `news/${id}`,
        //     providesTags: ['Like'],
        //     transformResponse: (response: ICourseByIdResponse, meta, arg) => response.result,
        // }),

    }),
});

export const { 
    useGetNewsGeneralInfoQuery, 
    useGetNewsDetailsQuery
} = newsApi;
export default newsApi;