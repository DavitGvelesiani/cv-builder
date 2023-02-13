import React, { useContext } from 'react'
import './PrivateInfoChapter.css'
import {BsFillTelephoneFill} from 'react-icons/bs';
import {MdAlternateEmail} from 'react-icons/md';
import { userContext } from '../../store/UserContext';

const PrivateInfoChapter = () => {
  const {user, setUser} = useContext(userContext);

  return (
    <div className='privateInfo-chapter'>
        <div>
            <h1>{user.name} {user.surname}</h1>
            <div  className='contact'>
              <p><MdAlternateEmail color='#898989' /> {user.email}</p>
              <p><BsFillTelephoneFill color='#898989' /> {user.number}</p>
            </div>
            <h2>about me</h2>
            <p className='aboutMe'>{user.aboutMe}</p>

        </div>
        <img src={user.image} alt="" />
    </div>
  )
}

export default PrivateInfoChapter