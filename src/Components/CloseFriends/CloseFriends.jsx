import { Link } from 'react-router-dom';
import { url, Users } from '../../data';
import './CloseFriends.scss';

const CloseFriends = () => {
    const closeFriend = Users.slice(4,6)
    
    return (
        <div className='closeFriend'>
            <h2 className="closeFriend__head">Close Friends</h2>
            {
               closeFriend.map(friend => (
                   <div  className='closeFriend__container'key={friend.id}>
                       <Link to={`/friend/${friend.id}`} >
                <img src={`${url}${friend.profilePicture}`} className='closeFriend__frImg' alt=""/>
               
                <span className='closeFriend__frName'>{friend.username}</span>
                </Link>
                </div>
               )) 
            }
            
        </div>
    );
};

export default CloseFriends;