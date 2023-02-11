import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import './BackButton.css'

const BackButton = ({link}) => {
  return (
    <div className='back-button'>
      <Link to={link}>
        <button>
            <IoIosArrowBack size={30} />
        </button>
      </Link>
    </div>
  )
}

export default BackButton