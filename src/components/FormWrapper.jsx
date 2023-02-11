import React from 'react'
import BackButton from './BackButton'
import Heading from './Heading'
import './FormWrapper.css'
import PrivateInfoChapter from './cv-components/PrivateInfoChapter'
import ExperienceChapter from './cv-components/ExperienceChapter'

const FormWrapper = ({children, heading, page, link}) => {
  return (
    <div className="page">
        <div className='left-container'>
            <BackButton link={link} />
            <div className='form-container'>
                <Heading
                heading={heading}
                page={page}
                />
                {children}
            </div>
        </div>
        <div className='right-container'>
          <PrivateInfoChapter />
          <ExperienceChapter />
        </div>
    </div>
  )
}

export default FormWrapper