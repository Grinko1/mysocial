import React from 'react';
import { useParams } from 'react-router-dom';
import { url } from '../../data';
import './MusicGenre.scss';
import ReactAudioPlayer from 'react-audio-player';

const MusicGenre = () => {
  const { name } = useParams();
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
    <div className="musicgenre">
      <h1 className="musicgenre__nead">{name} music</h1>
      <div className="musicgenre__img_container">
        {smallPreview.map((img) => (
          <div className="musicgenre__imgs" key={img.img}>
              <img src={img.img} alt="" className="musicgenre__img"/>
          </div>
        ))}
      </div>
      <div className="musicgenre_container">
          <h1 className="musicgenre__nead">Top songs</h1>
          <div className="musicgenre__hr"></div>
      <div>
          <p>Rampampam</p>
          <ReactAudioPlayer src={`${url}audio/audio1.mp3`}  controls className="player" />
          <p>I got to be a man</p>
          <ReactAudioPlayer src={`${url}audio/audio2.mp3`}  controls />
          
        </div>
        <div>
          <p>Rampampam</p>
          <ReactAudioPlayer src={`${url}audio/audio1.mp3`}  controls className="player" />
          <p>I got to be a man</p>
          <ReactAudioPlayer src={`${url}audio/audio2.mp3`}  controls />
          
        </div>
        <div>
          <p>Rampampam</p>
          <ReactAudioPlayer src={`${url}audio/audio1.mp3`}  controls className="player" />
          <p>I got to be a man</p>
          <ReactAudioPlayer src={`${url}audio/audio2.mp3`}  controls />
          
        </div>
      </div>
    </div>
  );
};

export default MusicGenre;
