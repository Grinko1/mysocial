import './Reccommend.scss';
import ReactAudioPlayer from 'react-audio-player';
import { url } from '../../data';

const Reccommend = () => {
  return (
    <div className="reccommend">
      <h2 className="reccommend-head">Reccommend you</h2>
      <div className="reccommend__music">
        <p className="reccommend-head">New songs</p>
        <div className="reccommend__music-block">
          <p>Rampampam</p>
          <ReactAudioPlayer src={`${url}audio/audio1.mp3`}  controls className="player" />
          <p>I got to be a man</p>
          <ReactAudioPlayer src={`${url}audio/audio2.mp3`}  controls />
        </div>
      </div>

      <div className="reccommend_ad">
      <p className="reccommend-head">*adv</p>
        <img src={`${url}ad.png`} alt="" className='reccommend__ad-img' />
       
      </div>
      <div className="reccommend__video">
      <h3 className="reccommend-head ">Alex add a new video</h3>
      <iframe src="https://giphy.com/embed/3ov9jQX2Ow4bM5xxuM" width="350" height="390" frameBorder="0"  allowFullScreen></iframe><p></p>
      </div>
    </div>
  );
};

export default Reccommend;
