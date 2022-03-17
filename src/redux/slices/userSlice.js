import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    me: {
        id:4,
        desc:"Today I'm busy",
        profilePicture: "person/4.jpeg",
        username: "Dora Hawks",
        city:"Belogorsk",
        age: 28,
        hobby:"Web dev",
        job: "Frontend developer",
        school: "MBOU SOSH №31",
        followers:[],
        followings:[
          1, 2, 3, 5, 6, 7, 8, 9, 10
        ]
      },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      changeInfo(state, action) {
          state.me.age = action.payload.age
          state.me.username = action.payload.username
          state.me.hobby = action.payload.hobby
          state.me.job = action.payload.job
          state.me.school = action.payload.school
          state.me.city = action.payload.city
      },
      changeStatus (state, action) {
        state.me.desc = action.payload
      }
  },
});
export default userSlice.reducer;
export const {changeInfo, changeStatus} = userSlice.actions
