import React from 'react'
import { Link } from 'react-router-dom';
import LOGO from '../Images/LOGO.png';
import LOGO2 from '../Images/LOGO_2.png';
import './Welcome.css'

const Welcome = () => {
  return (
    <div className="home">
    <div className='welcome'>
        <div className='head'>
            <img src={LOGO} alt='redberry logo' className='logo' />
        </div>
        <div>
          <Link to='/private-info'>
            <button className='start-button'><span>რეზიუმეს დამატება</span></button>
          </Link>
            
            <img src={LOGO2} alt='' className='logo-2' />
        </div>
    </div>
    </div>
  )
}

export default Welcome