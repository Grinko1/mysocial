import Rigthbar from '../../Components/Rigthbar/Rigthbar';
import SideMenu from '../../Components/SideMenu/SideMenu';
import TimeLine from '../../Components/Timiline/TimeLine';
import './Home.scss';

const Home = ({searchingUsers}) => {
    return (
 
            <div className="home__wrapper">
                 <SideMenu searchingUsers={searchingUsers}/>
                 <TimeLine/>
                 <Rigthbar/>
            </div>
         
    
    );
};

export default Home;