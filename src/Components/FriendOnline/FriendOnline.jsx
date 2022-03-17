import './FriendOnline.scss';
import {url} from '../../data'
import { Link } from 'react-router-dom';

const FriendOnline = ({user}) => {

    return (
        <li className="rigth__friend">
        <div className="rigth__img-profileContainer">
            <Link to={`/friend/${user.id}`}>
                <img src={`${url}${user.profilePicture}`} alt="" className="rigth__profileImg"/>
            </Link>
            
            <span className="rigth__online"></span>
            <span className="rigth__username">{user.username}</span>
        </div>
    </li>
    );
};

export default FriendOnline;