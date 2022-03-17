import { useParams } from 'react-router';
import { Posts, url, Users } from '../../data';
import './FriendPage.scss';
import { AiOutlineMinus , AiOutlinePlus} from 'react-icons/ai';
import Post from '../../Components/Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { follow, unfollow } from '../../redux/slices/followersSlice';

const FriendPage = () => {
  const { id } = useParams();
  const user = Users.find((u) => u.id === Number(id));
  const posts = Posts.filter((post) => post.userId === Number(id));
  const follower = useSelector((state) => state.follower.followers);
  const isFollow = follower.find((u) => u.id === Number(id));

  const dispatch = useDispatch()

  const handleSubsc = (user) => {
    dispatch(follow(user));
  };

  const unsubscribe = (user) => {
    dispatch(unfollow(user));
  };

  return (
    <div className="friendPage">
      <div className="friendPage__container">
        <div className="friendPage__head">
          <div className="friendPage__head-imgs">
            <img src={`${url}${user.profilePicture}`} alt="" className="friendPage__head-img" />
          </div>
          <div className="friendPage__head-info">
            <h2 className="friendPage__head-h2">{user.username}</h2>
            <div className="friendPage__head-p">
              <p>City: {user.city}</p>
              <p>Age: {user.age}</p>
              <p>Hobby: {user.hobby}</p>
              <p>Job: {user.job}</p>
              <p>School: {user.school}</p>
            </div>
          </div>
          <div className="friendPage__head-folw">
            {isFollow == undefined ? (
              <button className="friendPage__head-btn" onClick={()=>handleSubsc(user)}>
                <AiOutlinePlus /> Follow
              </button>
            ) : (
              <button className="friendPage__head-btn" onClick={()=>unsubscribe(user)}>
                <AiOutlineMinus /> Unfollow
              </button>
            )}
          </div>
        </div>

        <div className="friendPage__hr"></div>
        <div className="friendPage__posts">
          {posts.length ? (
            posts.map((post) => <Post post={post} mainPage={true} key={post.id} />)
          ) : (
            <h2 className="friendPage__posts-h2">No posts yet</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default FriendPage;
