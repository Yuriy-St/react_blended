import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_ENDPOINT = '/comments';
const BASE_URL = 'https://64674adeba7110b663b466b2.mockapi.io/';

export const commentApi = createApi({
  reducerPath: 'comments',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Comments'],
  endpoints: builder => ({
    getPost: builder.query({
      query: () => ({ url: API_ENDPOINT }),

      providesTags: ['comments'],
    }),

    addPost: builder.mutation({
      query: newComment => ({
        url: API_ENDPOINT,
        method: 'POST',
        body: newComment,
      }),
      invalidatesTags: ['comments'],
    }),

    updateComment: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `${API_ENDPOINT}/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['comments'],
    }),
  }),
});
export const { useGetPostQuery, useAddPostMutation, useUpdateCommentMutation } = commentApi;
