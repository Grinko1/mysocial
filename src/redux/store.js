import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import folowerReducer from './slices/followersSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    follower: folowerReducer,
  },
});
