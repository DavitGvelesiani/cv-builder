import React from 'react'

const EducationChapter = ({institute, degree, startDate, dueDate, description}) => {
  return (
    <div className='experienceChapter'>
        <h2>განათლება</h2>
        <div className='job'>
            <p className='job-name'>{institute}, {degree}</p>
            <p className='job-date'>{startDate} - {dueDate}</p>
        </div>
        <p className='about-job'>{description}</p>
    </div>
  )
}

export default EducationChapter