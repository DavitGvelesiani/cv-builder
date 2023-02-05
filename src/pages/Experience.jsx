import React from 'react'
import BackButton from '../components/BackButton';
import Input from '../components/Input';
import Heading from '../components/Heading';

const Experience = () => {
  return (
    <div className="experience-page">
        <BackButton />
        <div>
            <Heading
             heading='პირადი ინფო'
             page='1/3'
            />
            <form>
                <div>
                    <Input 
                        type='text'
                        heading='სახელი'
                        textUnder='მინიმუმ 2 ასო: ქართული ასოები'
                    />
                    <Input 
                        type='text'
                        heading='გვარი'
                        textUnder='მინიმუმ 2 ასო: ქართული ასოები'
                    />
                </div>
                
            </form>

        </div>
        <div>

        </div>
    </div>
  )
}

export default Experience