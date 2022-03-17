import './Rigthbar.scss';
import {Users} from '../../data'
import FriendOnline from '../FriendOnline/FriendOnline';


const Rigthbar = () => {

    const onlineUsers = Users.slice(0,5)
 
    return (
        <div className="rigthbar">
            <div className="rigthbar__wrapper">
        <div className="birthday__container">
          <img src="/assets/gift.png" alt="" className="birthday__img" />
          <span className="birthday__text">
            <b>John Show </b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rigth__ad" />
        <h3 className="rigth__title">Online Friends</h3>
        <ul className="rigth__friend-list">
          {onlineUsers.map((u) => (
            <FriendOnline key={u.id} user={u} />
          ))}
        </ul>
        </div>
        </div>
    );
};

export default Rigthbar;