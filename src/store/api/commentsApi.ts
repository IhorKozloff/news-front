import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../constants/baseUrl';
import { IComment, NewComment } from '../../types/comments';

export const commentsApi = createApi({
    reducerPath: 'commentsApi',

    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['CommentsList'],

    endpoints: (builder) => ({
        getCommentsByNewsId: builder.query<IComment[], string>({
            query: (id) => `/api/comments/${id}`,
            providesTags: ['CommentsList']
        }),
        addNewComment: builder.mutation<any, {newCommentData: NewComment, token: string}>({
            query: ({newCommentData, token}) => ({
                url: '/api/comments',
                method: 'POST',
                body: newCommentData,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }),
            invalidatesTags: ['CommentsList']
        }),
    }),
});

export const { 
    useGetCommentsByNewsIdQuery, useAddNewCommentMutation
} = commentsApi;
export default commentsApi;