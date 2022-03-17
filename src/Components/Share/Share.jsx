import './Share.scss';
import {url} from '../../data'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeStatus } from '../../redux/slices/userSlice';

const Share = () => {

  const [status, setStatus]= useState('')
  const dispatch = useDispatch()

  const handleChange = () => {
    dispatch(changeStatus(status))
    setStatus('')
  }
    return (
        <div className="share">
        <div className="share__wrapper">
          <div className="share__top">
            <img className="share__profileImg" src={`${url}person/4.jpeg`} alt="" />
            <input
              placeholder="What's in your mind Dora Hawks?"
              className="share__input"
              onChange={(e) => setStatus(e.target.value)}
              value={status}

            />
            <button className="share_button" onClick={handleChange}>Share</button>
          </div>
          <hr className="share_hr"/>
          <div className="share_bottom">
           
          </div>
        </div>
      </div>
    );
};

export default Share;