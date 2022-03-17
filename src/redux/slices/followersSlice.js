import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    followers:[
      {
        id:1,
        profilePicture: "person/1.jpeg",
        username: "Safak Kocaoglu",
        city:" New York",
        age: 23,
        hobby:"Bicycles",
        job: "Student",
        school: "Oclond high school",
        followers:[],
        followings:[]
  
      },
      {
        id:2,
        profilePicture: "person/2.jpeg",
        username: "Janell Shrum",
        city:"Ostin",
        age: 28,
        hobby:"Foto",
        job: "photographer",
        school: "Ostin high school",
        followers:[],
        followings:[]
      },
      {
        id:3,
        profilePicture: "person/3.jpeg",
        username: "Alex Durden",
        city:"Cape Town",
        age: 31,
        hobby:"Foto",
        job: "photographer",
        school: "Cape Town high school",
        followers:[],
        followings:[]
      },
      {
        id:5,
        profilePicture: "person/5.jpeg",
        username: "Thomas Holden",
        city:"Copenhagen",
        age: 31,
        hobby:"Bicycles",
        job: "Trainer",
        school: "Copenhagen high school",
        followers:[],
        followings:[]
      },
      {
        id:6,
        profilePicture: "person/6.jpeg",
        username: "Shirley Beauchamp",
        city:"Ottawa",
        age: 31,
        hobby:"Painting",
        job: "Teacher",
        school: "Copenhagen College",
        followers:[],
        followings:[]
      },
      {
        id:7,
        profilePicture: "person/7.jpeg",
        username: "Travis Bennett",
        city:"Washington",
        age: 30,
        hobby:"Backetball",
        job: "Teacher foreign language",
        school: "Washington University",
        followers:[],
        followings:[]
      },
      {
        id:8,
        profilePicture: "person/8.jpeg",
        username: "Kristen Thomas",
        city:"Rome",
        age: 30,
        hobby:"Art",
        job: "",
        school: "Rome college",
        followers:[],
        followings:[]
      },
      {
        id:9,
        profilePicture: "person/9.jpeg",
        username: "Gary Duty",
        city:"London",
        age: 37,
        hobby:"Dance",
        job: "Dance teacher",
        school: "Rome college",
        followers:[],
        followings:[]
      },
      {
        id:10,
        profilePicture: "person/10.jpeg",
        username: "Samata Dolores",
        city:"Madrid",
        age: 18,
        hobby:"",
        job: "Student",
        school: "High school",
        followers:[],
        followings:[]
      },
    ],
    newSubscribers : [
      {
        id:11,
        profilePicture: "person/8.jpeg",
        username: "Kristen Thomas",
        city:"Rome",
        age: 30,
        hobby:"Art",
        job: "",
        school: "Rome college",
        followers:[],
        followings:[]
      },
      {
        id:12,
        profilePicture: "person/9.jpeg",
        username: "Gary Duty",
        city:"London",
        age: 37,
        hobby:"Dance",
        job: "Dance teacher",
        school: "Rome college",
        followers:[],
        followings:[]
      },
    ]
};

const followersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      follow(state, action) {
          state.followers.push(action.payload)
          state.newSubscribers = state.newSubscribers.filter(u => u.id !== action.payload.id)
    
      },
      unfollow (state, action) {
        const newFollowers = state.followers.filter(user => user.id !== action.payload.id)
        state.followers = newFollowers
      }
  },
});
export default followersSlice.reducer;
export const {follow, unfollow} = followersSlice.actions
