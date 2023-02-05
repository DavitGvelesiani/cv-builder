import React from 'react'
import LOGO from '../Images/LOGO.png'
import './Welcome.css'

const Welcome = () => {
  return (
    <div className="home">
    <div className='welcome'>
        <div className='heading'>
            <img src={LOGO} alt='redberry logo' className='logo' />
        </div>
        <div>
            <button className='start-button'><span>რეზიუმეს დამატება</span></button>
        </div>
    </div>
    </div>
  )
}

export default Welcome