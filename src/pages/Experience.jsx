import React, { useState, useContext } from 'react'
import FormWrapper from '../components/FormWrapper'
import Input from '../components/Input'
import MoreButton from '../components/MoreButton'
import NavigationButton from '../components/NavigationButton'
import './Experience.css'
import { userContext } from '../store/UserContext'
import PrivateInfoChapter from '../components/cv-components/PrivateInfoChapter'
import LOGO3 from '../Images/LOGO_3.png'

const Experience = () => { 
  const [twoforms, setTwoForms] = useState(false) 
  const {user, setUser} = useContext(userContext);
  const [userExperience, setUserExperience] = useState({
    position: '',
    employer: '',
    startDate: null,
    dueDate: null,
    description: ''
  })
  const [userExperience2, setUserExperience2] = useState({
    position: '',
    employer: '',
    startDate: null,
    dueDate: null,
    description: ''
  })
  

    function experienceHandler(){
      setUser({
        ...user,
        experience: user.experience.push(userExperience, userExperience2)
      })
      console.log(user)
    }

    return (
      <div className="page">
    <FormWrapper heading='გამოცდილება' page='2/3' link='/private-info'>
        <form className='form'>
          <Input 
            type='text'
            heading='თანამდებობა'
            placeholder='თანამდებობა'
            textUnder='მინიმუმ 2 სიმბოლო'
            className='medium-input position'
            onChange={(e) => {
              setUserExperience({
                ...userExperience,
                position: e.target.value
              })
            }}
          />

          <Input
            type='text'
            heading='დამსაქმებელი'
            placeholder='დამსაქმებელი'
            textUnder='მინიმუმ 2 სიმბოლო'
            className='medium-input recruiter'
            onChange={(e) => {
              setUserExperience({
                ...userExperience,
                employer: e.target.value
              })
            }}
          />

            <div className='name-surname date'>
              <Input type='date' heading='დაწყების რიცხვი' className='name' onChange={(e) => {
                setUserExperience({
                  ...userExperience,
                  startDate: e.target.value
                })
              }}
                />
              <Input type='date' heading='დამთავრების რიცხვი' className='name' onChange={(e) => {
                setUserExperience({
                  ...userExperience,
                  dueDate: e.target.value
                })
              }}
              />
            </div>

            <div className='input about-me'>
                <label>აღწერა</label>
                <textarea rows='4' placeholder='როლი თანამდებობაზე და ზოგადი აღწერა' onChange={(e) => {
                setUserExperience({
                  ...userExperience,
                  description: e.target.value
                })
                }}></textarea>
            </div>
            {twoforms && <>
              <Input 
              type='text'
              heading='თანამდებობა'
              placeholder='თანამდებობა'
              textUnder='მინიმუმ 2 სიმბოლო'
              className='medium-input position'
              onChange={(e) => {
                setUserExperience2({
                  ...userExperience2,
                  position: e.target.value
                })
              }}
            />
  
            <Input
              type='text'
              heading='დამსაქმებელი'
              placeholder='დამსაქმებელი'
              textUnder='მინიმუმ 2 სიმბოლო'
              className='medium-input recruiter'
              onChange={(e) => {
                setUserExperience2({
                  ...userExperience2,
                  employer: e.target.value
                })
              }}
            />
  
              <div className='name-surname date'>
                <Input type='date' heading='დაწყების რიცხვი' className='name' onChange={(e) => {
                  setUserExperience2({
                    ...userExperience2,
                    startDate: e.target.value
                  })
                }}
                />
                <Input type='date' heading='დამთავრების რიცხვი' className='name' onChange={(e) => {
                  setUserExperience2({
                    ...userExperience2,
                    dueDate: e.target.value
                  })
                }}
                />
              </div>
  
              <div className='input about-me'>
                  <label>აღწერა</label>
                  <textarea rows='4' placeholder='როლი თანამდებობაზე და ზოგადი აღწერა' onChange={(e) => {
                  setUserExperience2({
                    ...userExperience2,
                    description: e.target.value
                  })
                }}
                ></textarea>
              </div>
              </>
            }
        </form>
        <MoreButton className='more-experience' onClick={() => {setTwoForms(true);}}>მეტი გამოცდილების დამატება</MoreButton>
        <div className='navigation2'>
          <NavigationButton text='უკან' link='/private-info' />
          <NavigationButton text='შემდეგი' link='/education' onClick={experienceHandler}/>
        </div>
    </FormWrapper>
    <div className='right-container'>
            <PrivateInfoChapter />
            <img src={LOGO3} alt="" className='logo3'/>
    </div>
    </div>
  );
}

export default Experience