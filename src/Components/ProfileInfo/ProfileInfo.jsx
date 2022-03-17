import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ProfileInfo.scss';

const ProfileInfo = () => {
    const user = useSelector(state => state.user.me)
  
    return (
        <div className='profileInfo'>
            <h2 className="profileInfo__nead">Info</h2>
            <p>City: {user.city}</p>
            <p>Age: {user.age}</p>
            <p>Hobby: {user.hobby}</p>
            <p>Job: {user.job}</p>
            <p>School: {user.school}</p>
            <Link to='/change-info'>
                <div className="profileInfo_btn">Change info</div>
            </Link>
            

        </div>
    );
};

export default ProfileInfo;