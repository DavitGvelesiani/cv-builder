import React, {useContext, useEffect, useState} from 'react'
import Input from '../components/Input';
import './PrivateInfo.css'
import FormWrapper from '../components/FormWrapper';
import NavigationButton from '../components/NavigationButton';
import { userContext } from '../store/UserContext';
import LOGO3 from '../Images/LOGO_3.png'

const PrivateInfo = () => {
    const {user, setUser} = useContext(userContext);

    function nameChangeHandler(e){
        setUser({
            ...user,
            name: e.target.value
        });
    }

    function surnameChangeHandler(e){
        setUser({
            ...user,
            surname: e.target.value
        })
    }

    function imageUploadHandler(e){
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            setUser({
                ...user,
                image: reader.result
            })
        })

        reader.readAsDataURL(e.target.files[0]);
    }

    function aboutMeChangeHandler(e){
        setUser({
            ...user,
            aboutMe: e.target.value
        })
    }

    function emailChangeHandler(e){
        setUser({
            ...user,
            email: e.target.value
        })
    }

    function numberChangeHandler(e){
        setUser({
            ...user,
            number: e.target.value
        })
    }


  
    return (

        <div className="page">
     <FormWrapper heading='პირადი ინფო' page='1/3' link='/'>
        <form className='form'>
            <div className='name-surname'>
                <Input 
                    type='text'
                    heading='სახელი'
                    textUnder='მინიმუმ 2 ასო: ქართული ასოები'
                    className='name'
                    onChange={nameChangeHandler}
                    value={user.name}
                />
                <Input 
                    type='text'
                    heading='გვარი'
                    textUnder='მინიმუმ 2 ასო: ქართული ასოები'
                    className='name'
                    onChange={surnameChangeHandler}
                    value={user.surname}
                />
            </div>
            <div className='upload'>
                <p>პირადი ფოტოს ატვირთვა</p>
                <input required style={{ display: "none" }} type="file" id="file" onChange={imageUploadHandler}/>
                <label htmlFor="file">
                    <span>ატვირთვა</span>
                </label>
            </div>

            <div className='input about-me'>
                <label>ჩემ შესახებ (არასავალდებულო)</label>
                <textarea rows='4' placeholder='ზოგადი ინფო შენ შესახებ' onChange={aboutMeChangeHandler} value={user.aboutMe}></textarea>
            </div>

            <Input 
                type='email'
                heading='ელ-ფოსტა'
                textUnder='უნდა მთავრდებოდეს @redberry.ge-ით'
                className='medium-input email'
                onChange={emailChangeHandler}
                value={user.email}
            />

            <Input
                type='number'
                heading='მობილურის ნომერი'
                placeholder='+995 551 123 456'
                textUnder='უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს'
                className='medium-input number'
                onChange={numberChangeHandler}
                value={user.number}
            />
                    
        </form>
        <div className='navigation'>
            <NavigationButton text='შემდეგი' link='/experience' className='next'/>
        </div>
    </FormWrapper>
    <div className='right-container'>
        <img src={LOGO3} alt='' className='logo3' />
    </div>
    </div>
  )
}

export default PrivateInfo