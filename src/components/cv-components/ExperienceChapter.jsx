import React, {useContext} from 'react'
import './ExperienceChapter.css'
import { userContext } from '../../store/UserContext'

const ExperienceChapter = () => {
  const {user, setUset} = useContext(userContext)
  
      
      {user.experience.map((experience) => {
        return (
            <div className='experienceChapter' key={experience.id}>
            <h2>გამოცდილება</h2>
            <div className='job'>
                <p className='job-name'>{experience.position}, {experience.employer}</p>
                <p className='job-date'>{experience.dueDate}</p>
            </div>
            <p className='about-job'>{experience.description}</p>
        </div>
        );
      })
      
      }
}

export default ExperienceChapter