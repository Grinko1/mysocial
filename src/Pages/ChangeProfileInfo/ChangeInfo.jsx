import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { changeInfo } from '../../redux/slices/userSlice';
import './ChangeInfo.scss';

const ChangeInfo = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [age, setAge] = useState('');
  const [hobby, setHobby] = useState('');
  const [job, setJob] = useState('');
  const [school, setSchool] = useState('');

  const user = useSelector((state) => state.user.me);
  const dispatch = useDispatch()
 const navigate = useNavigate()

  useEffect(() => {
    setName(user.username);
    setCity(user.city);
    setAge(user.age);
    setHobby(user.hobby);
    setJob(user.job);
    setSchool(user.school);
  }, []);

  const handleSubmit = (e) => {
      e.preventDefault()
      const data = {username: name, city, age,hobby, job, school }
      dispatch(changeInfo(data))
      navigate('/my-profile')
     
  }
  return (
    <div className="changeInfo">
      <h1 className="changeInfo__nead">Change profile info</h1>

      <form className="changeInfo__form">
        <label className="changeInfo__form-label">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="changeInfo__form-input"
        />
        <label className="changeInfo__form-label">City</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="changeInfo__form-input"
        />
        <label className="changeInfo__form-label">Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="changeInfo__form-input"
        />
        <label className="changeInfo__form-label">Hobby</label>
        <input
          type="text"
          value={hobby}
          onChange={(e) => setHobby(e.target.value)}
          className="changeInfo__form-input"
        />
        <label className="changeInfo__form-label">Job</label>
        <input
          type="text"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          className="changeInfo__form-input"
        />
        <label className="changeInfo__form-label">School</label>
        <input
          type="text"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          className="changeInfo__form-input"
        />
        <button onClick={handleSubmit} className="changeInfo__form-btn">Change</button>
      </form>
    </div>
  );
};

export default ChangeInfo;
