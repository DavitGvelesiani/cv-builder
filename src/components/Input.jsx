import React from 'react'
import './Input.css'

const Input = ({heading, type, placeholder, textUnder, className, onChange}) => {
  return (
    <div className={`input ${className}`}>
        <label>{heading}</label>
        <input type={type} placeholder={placeholder} onChange={onChange}/>
        <p>{textUnder}</p>
    </div>
  )
}

export default Input