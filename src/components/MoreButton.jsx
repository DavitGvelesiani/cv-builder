import React from 'react'
import './MoreButton.css'

const MoreButton = ({children, onClick, className}) => {
  return (
    <button onClick={onClick} className={`moreButton ${className}`}>
        {children}
    </button>
  )
}

export default MoreButton