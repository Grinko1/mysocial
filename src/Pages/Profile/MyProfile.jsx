import Share from '../../Components/Share/Share';
import SideMenu from '../../Components/SideMenu/SideMenu';
import { Posts, url, Users } from '../../data';
import './MyProfile.scss';
import Post from '../../Components/Post/Post';
import Notifications from '../../Components/Notifications/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { changeStatus } from '../../redux/slices/userSlice';

const MyProfile = ({searchingUsers}) => {
  const myPosts = Posts.filter((post) => post.userId === 4);
  const user = useSelector(state =>state.user.me)




  return (
    <>
      <div className="myprofile">
        <SideMenu searchingUsers={searchingUsers} />
        <div className="myprofile__container">
    

        <div className="profile__head">
          
          <div className="profile__head-top">
            <div className="profile__cover">
              <img
                src={`${url}/person/user-bg.webp`}
                alt=""
                className="profile__cover-img"
              />
              <img
                src={`${url}${user.profilePicture}`}
                alt=""
                className="profile__cover-userImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          </div>





          <div className="myprofile__share">
            <Share/>
          </div>
          {myPosts.map((post) => (
            <Post post={post} myPage={true} key={post.id} />
          ))}
        </div>
        <Notifications />
      </div>
    </>
  );
};

export default MyProfile;
