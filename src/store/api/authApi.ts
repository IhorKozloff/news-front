import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../constants/baseUrl';
import { IUserDetails, UserLoginData, UserLogoutData, UserRegisterData } from '../../types/auth';

export const authApi = createApi({
    reducerPath: 'authApi',

    baseQuery: fetchBaseQuery({ baseUrl }),
    // tagTypes: ['Like'],

    endpoints: (builder) => ({
        register: builder.mutation<IUserDetails, UserRegisterData>({
            query: (body) => ({
                url: '/api/auth/register',
                method: 'POST',
                body
            }),
        }),

        login: builder.mutation<IUserDetails, UserLoginData>({
            query: (body) => ({
                url: '/api/auth/login',
                method: 'POST',
                body
            }),
        }),

        // logout: builder.query<void, UserLogoutData>({
        //     query: (userData) => ({
        //         url: `/api/auth/logout/${userData.id}`,
        //         method: 'GET',
        //         headers: {
        //             'Authorization': `Bearer ${userData.token}`
        //         }
        //     }),
        // }),
    }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
export default authApi;