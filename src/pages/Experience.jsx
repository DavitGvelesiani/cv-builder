import React, { useState } from 'react'
import FormWrapper from '../components/FormWrapper'
import Input from '../components/Input'
import MoreButton from '../components/MoreButton'
import NavigationButton from '../components/NavigationButton'
import './Experience.css'

const Experience = () => {  
    return (
    <FormWrapper heading='გამოცდილება' page='2/3' link='/private-info'>
        <form className='form'>
          <Input 
            type='text'
            heading='თანამდებობა'
            placeholder='თანამდებობა'
            textUnder='მინიმუმ 2 სიმბოლო'
            className='medium-input position'
          />

          <Input
            type='text'
            heading='დამსაქმებელი'
            placeholder='დამსაქმებელი'
            textUnder='მინიმუმ 2 სიმბოლო'
            className='medium-input recruiter'
          />

            <div className='name-surname date'>
              <Input type='date' heading='დაწყების რიცხვი' className='name' />
              <Input type='date' heading='დამთავრების რიცხვი' className='name' />
            </div>

          <Input className='description' />
        </form>
        <MoreButton className='more-experience'>მეტი გამოცდილების დამატება</MoreButton>
        <div className='navigation2'>
          <NavigationButton text='უკან' link='/private-info' />
          <NavigationButton text='შემდეგი' link='/education'  />
        </div>
    </FormWrapper>
  );
}

export default Experience