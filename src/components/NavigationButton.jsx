import React from 'react'
import { Link } from 'react-router-dom'
import './NavigationButton.css'

const NavigationButton = ({text, link, className, onClick}) => {
  return (
    <div className={`navigation-button ${className}`}>
        <Link to={link}>
            <button onClick={onClick}>{text}</button>
        </Link>
    </div>
  )
}

export default NavigationButton