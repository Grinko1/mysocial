import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Layout from './Components/Nav/Layout';
import Friend from './Pages/Friend/Friend';
import Chat from './Pages/Chat/Chat';
import Video from './Pages/Video/Video';
import Music from './Pages/Music/Music';
import MusicGenre from './Pages/Music/MusicGenre';
import MyProfile from './Pages/Profile/MyProfile';
import FriendPage from './Pages/FriendPage/FriendPage';
import ChangeInfo from './Pages/ChangeProfileInfo/ChangeInfo';
import { useState } from 'react';
import { Users } from './data';

function App() {
  const [search, setSearch] = useState('')

  const searchingUsers = Users.filter(user => user.username.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout search={search} setSearch={setSearch} />}>
          <Route index element={<Home  searchingUsers={searchingUsers}/>} />
          <Route path='/friends' element={<Friend  searchingUsers={searchingUsers} />}/>
          <Route path='/chat' element={<Chat/>}/>
          <Route path='/videos' element={<Video/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/music/:name' element={<MusicGenre/>}/>
          <Route path='/my-profile' element={<MyProfile  searchingUsers={searchingUsers} />}/>
          <Route path='/friend/:id' element={<FriendPage/>}/>
          <Route path='/change-info' element={<ChangeInfo/>}/>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
