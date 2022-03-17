import './Notifications.scss';
import {AiOutlineMessage, AiOutlineUserAdd} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import CloseFriends from '../CloseFriends/CloseFriends';

const Notifications = () => {
    return (
        <div className="notification">
            <h2 className='notif__head'>Notifications</h2>

            <div className="notification__msg">
                <Link to='/chat'>
               <p> <AiOutlineMessage className='notification__msg-icon'/> 1 new message</p>
               </Link>
               <Link to='/friends'>
               <p> <AiOutlineUserAdd className='notification__msg-icon'/> 2 new subscribers</p>
               </Link>
            </div>
            <div className="notification__about">
                <ProfileInfo/>
            </div>
            <div className="notification__closeFriend">
                 <CloseFriends/>
            </div>
           
            
        </div>
    );
};

export default Notifications;