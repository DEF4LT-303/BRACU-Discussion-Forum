import { createSlice } from '@reduxjs/toolkit';

const forumSlice = createSlice({
  name: 'forums',
  initialState: {
    forums: [],
    isFetching: false,
    error: false
  },
  reducers: {
    createForumStart: (state) => {
      state.isFetching = true;
      state.error = false; // Reset error to false when starting login
    },
    createForumSuccess: (state) => {
      state.isFetching = false;
      state.error = false; // Reset error to false on successful login
    },
    createForumFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateForumStart: (state) => {
      state.isFetching = true;
      state.error = false; // Reset error to false when starting update
    },
    updateForumSuccess: (state, action) => {
      state.isFetching = false;
      state.forums = action.payload;
      state.error = false; // Reset error to false on successful update
    },
    updateForumFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getForumStart: (state) => {
      state.isFetching = true;
      state.error = false; // Reset error to false when starting find
    },
    getForumSuccess: (state, action) => {
      state.isFetching = false;
      state.forums = action.payload;
      state.error = false; // Reset error to false on successful find
    },
    getForumFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    }
  }
});

export const {
  updateForumStart,
  updateForumSuccess,
  updateForumFailure,
  getForumStart,
  getForumSuccess,
  createForumFailure,
  createForumStart,
  createForumSuccess,
  getForumFailure
} = forumSlice.actions;

export default forumSlice.reducer;
