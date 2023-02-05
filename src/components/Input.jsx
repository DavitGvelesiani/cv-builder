import React from 'react'

const Input = ({heading, type, placeholder, textUnder}) => {
  return (
    <div className='input'>
        <footer>{heading}</footer>
        <input type={type} placeholder={placeholder} />
        <p>{textUnder}</p>
    </div>
  )
}

export default Input