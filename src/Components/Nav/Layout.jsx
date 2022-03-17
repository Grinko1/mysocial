import { Link, Outlet } from 'react-router-dom';
import './Nav.scss';
import { AiOutlineSearch, AiFillMessage } from 'react-icons/ai';
import { FaUserPlus } from 'react-icons/fa';
import {GiWorld} from 'react-icons/gi'

const Layout = ({search, setSearch}) => {
 
  return (
    <>
      <header className="navbar">
        <div className="nav__logo-left">
          <Link to='/' className="nav__logo-link">
          <span className="nav__logo"><GiWorld className="nav__logo-icon"/> MySocial</span>
          </Link>
        </div>
        <div className="nav__center">
          <div className="nav__search">
            <AiOutlineSearch className="nav__search-icon" />
            <input type="text" placeholder="search friends" value={search} onChange={e =>setSearch(e.target.value)} className="nav__search-input" />
          </div>
        </div>
        <div className="nav__right">
          <div className="nav__right-links">
            
            <div className="nav__right-link">
              {' '}
              <Link  to="/friends">
                <FaUserPlus className="nav__right-icon" />
                <span className="nav__right-bange">2</span>
              </Link>{' '}
            </div>
            <div className="nav__right-link">
              <Link to="/chat">
                <AiFillMessage className="nav__right-icon" />
                <span className="nav__right-bange">1</span>
              </Link>{' '}
            </div>
          </div>
        </div>
        <div className="nav__end">
          <Link  to="/my-profile">
            <img src="/assets/person/4.jpeg" alt="" className="nav__end-img" />
          </Link>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
