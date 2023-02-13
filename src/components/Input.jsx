import React from 'react'
import './Input.css'

const Input = ({heading, type, placeholder, textUnder, className, onChange, value}) => {
  return (
    <div className={`input ${className}`}>
        <label>{heading}</label>
        <input type={type} placeholder={placeholder} onChange={onChange} value={value} required/>
        <p>{textUnder}</p>
    </div>
  )
}

export default Input