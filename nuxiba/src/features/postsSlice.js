
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (userId) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
  return response.data;
});

export const fetchComments = createAsyncThunk('posts/fetchComments', async (postId) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  return { postId, comments: response.data };
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle'
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload.map(post => ({ ...post, comments: [] }));
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        const post = state.posts.find(p => p.id === action.payload.postId);
        post.comments = action.payload.comments;
      });
  }
});

export default postsSlice.reducer;
