import { Link } from 'react-router-dom';
import { url } from '../../data';
import './UserList.scss';

const UserList = ({user}) => {

    return (
        <li className="sidebar__friend">
        <Link className='sidebar__Fr-link' to={`/friend/${user.id}`}>
    <img src={`${url}${user.profilePicture}`} className='sidebar__frImg' alt=""/>
    
    <span className='sidebar__frName'>{user.username}</span>
    </Link>
</li>
    );
};

export default UserList;