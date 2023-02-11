import React from 'react'
import './Heading.css'

const Heading = ({heading, page}) => {
  return (
    <div className='heading'>
        <h1>{heading}</h1>
        <h2>{page}</h2>
    </div>
  )
}

export default Heading