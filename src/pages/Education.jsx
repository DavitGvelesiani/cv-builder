import React, {useState, useContext, useCallback, useEffect} from 'react'
import FormWrapper from '../components/FormWrapper';
import Input from '../components/Input';
import './Education.css'
import MoreButton from '../components/MoreButton';
import NavigationButton from '../components/NavigationButton';
import { userContext } from '../store/UserContext';
import PrivateInfoChapter from '../components/cv-components/PrivateInfoChapter';
import ExperienceChapter from '../components/cv-components/ExperienceChapter';
import axios from 'axios';
import LOGO3 from '../Images/LOGO_3.png'

const Education = () => {
  const [options, setOptions] = useState([]);
  const [twoforms, setTwoForms] = useState(false) 
  const {user, setUser} = useContext(userContext);
  const [userEducation, setUserEducation] = useState({
    school: '',
    quality: '',
    endDate: null,
    description: ''
  })
  const [userEducation2, setUserEducation2] = useState({
    school: '',
    quality: '',
    endDate: null,
    description: ''
  })

  useEffect(() => {
    axios.get('https://resume.redberryinternship.ge/api/degrees').then((response) => {
      setOptions(response.data);
    });
  }, []);


  return (
    <div className='page'>
    <FormWrapper heading='განათლება' page='3/3' link='/experience'>
        <form className='form'>
            <Input 
                heading='სასწავლებელი'
                type='text'
                placeholder='სასწავებელი'
                textUnder='მინიმუმ 2 სიმბოლო'
                className='medium-input'
                onChange={(e) => {
                  setUserEducation({
                    ...userEducation,
                    university: e.target.value
                  })
                }}
            />
            <div className='name-surname'>
              <div className='dropdown'>
                <label>ხარისხი</label>

                <select onChange={(e) => {
                  setUserEducation({
                    ...userEducation,
                    quality: e.target.value
                  })
                }}>
                  {options.map((option) => {
                    return(<option key={option.id} value={option.title}>{option.title}</option>)
                  })}
                </select>
              </div>
              <Input type='date' heading='დამთავრების რიცხვი' className='name' onChange={(e) => {
                  setUserEducation({
                    ...userEducation,
                    endDate: e.target.value
                  })
                }} />
            </div>

            <div className='input about-me'>
                <label>აღწერა</label>
                <textarea placeholder='განათლების აღწერა' onChange={(e) => {
                  setUserEducation({
                    ...userEducation,
                    university: e.target.value
                  })
                }}></textarea>
            </div>

            {twoforms && <>
              <Input 
                heading='სასწავლებელი'
                type='text'
                placeholder='სასწავებელი'
                textUnder='მინიმუმ 2 სიმბოლო'
                className='medium-input'
                onChange={(e) => {
                  setUserEducation2({
                    ...userEducation,
                    university: e.target.value
                  })
                }}
            />
            <div className='name-surname'>
              <div className='dropdown'>
                <label>ხარისხი</label>

                <select onChange={(e) => {
                  setUserEducation2({
                    ...userEducation,
                    quality: e.target.value
                  })
                }}>
                  {options.map((option) => {
                    return(<option key={option.id} value={option.title}>{option.title}</option>)
                  })}
                </select>
              </div>
              <Input type='date' heading='დამთავრების რიცხვი' className='name' onChange={(e) => {
                  setUserEducation2({
                    ...userEducation,
                    endDate: e.target.value
                  })
                }} />
            </div>

            <div className='input about-me'>
                <label>აღწერა</label>
                <textarea placeholder='განათლების აღწერა' onChange={(e) => {
                  setUserEducation2({
                    ...userEducation,
                    university: e.target.value
                  })
                }}></textarea>
            </div>
            </>}

        </form>
        <MoreButton className='more-education' onClick={useCallback(() => setTwoForms(true))}>სხვა სასწავლებლის დამატება</MoreButton>
        <div className='navigation2'>
          <NavigationButton text='უკან' link='/experience' />
          <NavigationButton text='დასრულება' link='/completed' onClick={() => {
            setUser({
              ...user,
              education: user.education.push(userEducation, userEducation2)
            })
          }}/>
        </div>

    </FormWrapper>
    <div className='right-container'>
          <PrivateInfoChapter />
          <ExperienceChapter />
          <img src={LOGO3} alt="" className='logo3' />
    </div>
    </div>
  )
}

export default Education