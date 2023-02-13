import React from 'react'
import BackButton from './BackButton'
import Heading from './Heading'
import './FormWrapper.css'

const FormWrapper = ({children, heading, page, link}) => {
  return (
    
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
  )
}

export default FormWrapper