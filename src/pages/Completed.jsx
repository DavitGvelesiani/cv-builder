import React from 'react'
import PrivateInfoChapter from '../components/cv-components/PrivateInfoChapter'
import ExperienceChapter from '../components/cv-components/ExperienceChapter'
import EducationChapter from '../components/cv-components/EducationChapter';
import BackButton from '../components/BackButton';
import './Completed.css'
import LOGO3 from '../Images/LOGO_3.png'
import {ImCancelCircle} from 'react-icons/im'

const Completed = () => {
  return (
    <div className='complete-page'>
      <BackButton link='/' />
      <div className='cv-container'>
        <PrivateInfoChapter />
        <ExperienceChapter />
        <EducationChapter />
        <img className='logo3' src={LOGO3} alt="" />
      </div>
      <div className='complete-message'>
        <h1>რეზიუმე წარმატებით გაიგზავნა</h1>
        <button style={{border: 'none', cursor: 'pointer', position: 'absolute', top: '65px', right: '70px'}}>
          <ImCancelCircle size={30} />
        </button>
      </div>
    </div>
  )
}

export default Completed