import SideMenu from '../../Components/SideMenu/SideMenu';
import './Friend.scss';
import { url } from '../../data';
import { IoMdRemove, IoMdAdd } from 'react-icons/io';
import Reccommend from '../../Components/Reccommend/Reccommend';
import { useDispatch, useSelector } from 'react-redux';
import { follow, unfollow } from '../../redux/slices/followersSlice';
import { Link } from 'react-router-dom';

const Friend = ({ searchingUsers }) => {
  const newSub = useSelector((state) => state.follower.newSubscribers);
  const folowers = useSelector((state) => state.follower.followers);

  const online = folowers.slice(0, 3);
  const notOnline = folowers.slice(4, 9);
  const dispatch = useDispatch();

  const handleSubsc = (user) => {
    dispatch(follow(user));
  };

  const unsubscribe = (user) => {
    dispatch(unfollow(user));
  };

  return (
    <div className="friend">
      <SideMenu searchingUsers={searchingUsers} />
      <div className="friend__container">
        <div className="friend__block">
          <div className="friend__new">
            <h2 className="friend__block-head">New subscribers </h2>
            <div className="friend__block-online">
              {newSub.map((user) => (
                <div className="user_online" key={user.id}>
                  <Link to={`/friend/${user.id}`}>
                    <img src={`${url}${user.profilePicture}`} alt="" className="user_online-img" />
                  </Link>
                  <div className="user_online-name">{user.username}</div>
                  <button className="user_online-btn" onClick={() => handleSubsc(user)}>
                    <IoMdAdd /> Follow
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="friend__hr"></div>
          <h2 className="friend__block-head">Friends </h2>
          <div className="friend__block-online">
            {online.map((user) => (
              <div className="user_online" key={user.id}>
                <Link to={`/friend/${user.id}`}>
                  <img src={`${url}${user.profilePicture}`} alt="" className="user_online-img" />
                </Link>
                <span className="user_online-bange"></span>
                <div className="user_online-name">{user.username}</div>
                <button className="user_online-btn" onClick={() => unsubscribe(user)}>
                  <IoMdRemove /> Unfollow
                </button>
              </div>
            ))}
            {notOnline.map((user) => (
              <div className="user_online" key={user.id}>
                <a href={`${user.id}`}>
                  <img src={`${url}${user.profilePicture}`} alt="" className="user_online-img" />
                </a>
                <div className="user_online-name">{user.username}</div>
                <button className="user_online-btn" onClick={() => unsubscribe(user)}>
                  <IoMdRemove /> Unfollow
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="friend__reccommend">
        <Reccommend />
      </div>
    </div>
  );
};

export default Friend;
