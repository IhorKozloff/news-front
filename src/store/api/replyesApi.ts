import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../constants/baseUrl';
import { INewReply, IReply } from '../../types/reply';

export const replyesApi = createApi({
    reducerPath: 'replyesApi',

    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['replyList'],

    endpoints: (builder) => ({
        getReplyesByParentId: builder.query<IReply[], {newsId: string, parentId: string}>({
            query: ({newsId, parentId}) => ({
                url: `/api/reply/${newsId}?parent_id=${parentId}`,
                method: 'GET',
                query: {
                    parent_id: parentId
                }
            }),
            providesTags: ['replyList']
        }),
        addNewReply: builder.mutation<any, {newReplyData: INewReply, token: string}>({
            query: ({newReplyData, token}) => ({
                url: '/api/reply',
                method: 'POST',
                body: newReplyData,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }),
            invalidatesTags: ['replyList']
        }),
    }),
});

export const { 
    useGetReplyesByParentIdQuery, useAddNewReplyMutation
} = replyesApi;
export default replyesApi;