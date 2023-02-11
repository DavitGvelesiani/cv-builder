import React, {useContext} from 'react'
import Input from '../components/Input';
import './PrivateInfo.css'
import FormWrapper from '../components/FormWrapper';
import NavigationButton from '../components/NavigationButton';
import { userContext } from '../store/UserContext';

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

        
        console.log(user)
    }


  
    return (
     <FormWrapper heading='პირადი ინფო' page='1/3' link='/'>
        <form className='form'>
            <div className='name-surname'>
                <Input 
                    type='text'
                    heading='სახელი'
                    textUnder='მინიმუმ 2 ასო: ქართული ასოები'
                    className='name'
                    onChange={nameChangeHandler}
                />
                <Input 
                    type='text'
                    heading='გვარი'
                    textUnder='მინიმუმ 2 ასო: ქართული ასოები'
                    className='name'
                    onChange={surnameChangeHandler}
                />
            </div>
            <div className='upload'>
                <p>პირადი ფოტოს ატვირთვა</p>
                <input required style={{ display: "none" }} type="file" id="file" onChange={imageUploadHandler}/>
                <label htmlFor="file">
                    <span>ატვირთვა</span>
                </label>
            </div>

            <Input
                type='text'
                heading='ჩემ შესახებ (არასავალდებულო)'
                placeholder='ზოგადი ინფო შენ შესახებ'
                className='about-me'
            />

            <Input 
                type='email'
                heading='ელ-ფოსტა'
                textUnder='უნდა მთავრდებოდეს @redberry.ge-ით'
                className='medium-input email'
            />

            <Input
                type='number'
                heading='მობილურის ნომერი'
                placeholder='+995 551 123 456'
                textUnder='უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს'
                className='medium-input number'
            />
                    
        </form>
        <div className='navigation'>
            <NavigationButton text='შემდეგი' link='/experience' className='next'/>
        </div>
    </FormWrapper>
  )
}

export default PrivateInfo