import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../constants/baseUrl';

export const uploadImgApi = createApi({
    reducerPath: 'uploadImgApi',

    baseQuery: fetchBaseQuery({ baseUrl }),

    endpoints: (builder) => ({

        uploadImg: builder.mutation<any, {imgData: FormData, token: string}>({
            query: ({imgData, token}) => ({
                url: '/api/upload',
                method: 'POST',
                body: imgData,
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }),
        }),
    }),
});

export const { 
    useUploadImgMutation
} = uploadImgApi;
export default uploadImgApi;