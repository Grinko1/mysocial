import './Music.scss';
import { url } from '../../data';
import { Link } from 'react-router-dom';

const Music = () => {
  const smallPreview = [
    {
      img: `${url}music/1.jpeg`,
      name: 'Rock',
    },
    {
      img: `${url}music/2.jpeg`,
      name: 'Hip hop',
    },
    {
      img: `${url}music/3.jpeg`,
      name: 'Dance',
    },
    {
      img: `${url}music/4.jpeg`,
      name: 'Juzz',
    },
    {
      img: `${url}music/5.png`,
      name: 'Reggae',
    },
    {
      img: `${url}music/6.webp`,
      name: 'Punk',
    },
    {
      img: `${url}music/7.jpeg`,
      name: '90s',
    },
    {
      img: `${url}music/8.jpeg`,
      name: 'Retro',
    },
    {
      img: `${url}music/9.jpeg`,
      name: 'Techno',
    },

  ];


  return (
    <div className="music">
      <div className="music__wrapper">
        <h1 className="music__head">Music</h1>
        <p className="music__head">Top tags</p>
        <div className="music__hr"></div>
        <div className="music__container">
          <div className="music__big-prewiev">
              <Link to='/music/electronic'>
            <img src={`${url}music/music-big.jpeg`} alt="" className="music__big-prewievImg" />
            
            <h1 className="music__big-name">Electronic</h1>
            </Link>
          </div>
          <div className="music__small-prewiev">
            {smallPreview.map((img) => (
              <div key={img.img} className="music__small-container">
                  <Link to={`/music/${img.name}`}>
                <img src={img.img} alt="" className="music__small-img" />
                
                    <span className="music__small-name"><mark className='music__small-Bg'>{img.name}</mark></span>
            </Link>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
