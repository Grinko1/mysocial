import './SideMenu.scss';
import {GiNewspaper} from 'react-icons/gi'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {BsChatDots, BsMusicPlayer} from 'react-icons/bs'
import {FaPhotoVideo} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { Users } from '../../data';
import UserList from '../UserList/UserList';

const SideMenu = ({searchingUsers=''}) => {
    return (
        <div className='sidemenu'>
            <div className="sidemenu__wrapper">
                <ul className="sidemenu__list">
                <li className="sidemenu__list-item">
                       <Link to='/'> <GiNewspaper className='sidemenu__list-icon'/> Timeline</Link> 
                    </li>
                    <li className="sidemenu__list-item">
                       <Link to='/friends'> <HiOutlineUserGroup className='sidemenu__list-icon'/> Friends</Link> 
                    </li>
                    <li className="sidemenu__list-item">
                        <Link to="/chat"><BsChatDots className='sidemenu__list-icon'/> Chat</Link> 
                    </li>
                    <li className="sidemenu__list-item">
                      <Link to="/videos"><FaPhotoVideo className='sidemenu__list-icon'/> Video</Link>  
                    </li>
                    <li className="sidemenu__list-item">
                       <Link to="/music"><BsMusicPlayer className='sidemenu__list-icon'/> Music</Link> 
                    </li>
                </ul>
                <hr className='sidemenu__hr'/>
                <ul className="sidemenu__userList">
            {
                searchingUsers !=='' ?  searchingUsers.map(u=>(
                    <UserList key={u.id} user={u} searchingUsers={searchingUsers}/>
                ))
                :(
                       Users.map(u=>(
                    <UserList key={u.id} user={u} searchingUsers={searchingUsers}/>
                ))
                )
             
            }
             
              
             </ul>
            </div>
            
        </div>
    );
};

export default SideMenu;