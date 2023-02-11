import React from 'react'
import FormWrapper from '../components/FormWrapper';
import Input from '../components/Input';
import './Education.css'
import MoreButton from '../components/MoreButton';
import NavigationButton from '../components/NavigationButton';

const Education = () => {
  return (
    <FormWrapper heading='განათლება' page='3/3' link='/experience'>
        <form className='form'>
            <Input 
                heading='სასწავლებელი'
                type='text'
                placeholder='სასწავებელი'
                textUnder='მინიმუმ 2 სიმბოლო'
                className='medium-input'
            />
            <div className='name-surname'>
              <div className='dropdown'>
                <label>ხარისხი</label>

                <select>
                  <option value="საშუალო სკოლის დიპლომი">საშუალო სკოლის დიპლომი</option>
                  <option value="ზოგადსაგანმანათლებლო დიპლომი">ზოგადსაგანმანათლებლო დიპლომი</option>
                  <option value="ბაკალავრი">ბაკალავრი</option>
                  <option value="მაგისტრი">მაგისტრი</option>
                  <option value="დოქტორი">დოქტორი</option>
                  <option value="ასოცირებული ხარისხი">ასოცირებული ხარისხი</option>
                  <option value="სტუდენტი">სტუდენტი</option>
                  <option value="კოლეჯი (ხარისხის გარეშე)">კოლეჯი (ხარისხის გარეშე)</option>
                  <option value="სხვა">სხვა</option>
                </select>
              </div>
              <Input type='date' heading='დამთავრების რიცხვი' className='name' />
            </div>

            <Input />

        </form>
        <MoreButton className='more-education'>სხვა სასწავლებლის დამატება</MoreButton>
        <div className='navigation2'>
          <NavigationButton text='უკან' link='/experience' />
          <NavigationButton text='დასრულება' link='' />
        </div>

    </FormWrapper>
  )
}

export default Education