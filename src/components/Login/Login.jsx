import React, { useState, useContext } from 'react'
import { AppContext } from '../../App'

function Login() {

    // Form local state logic for form validation
    const [email, setEmail] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [password, setPassword] = useState('')

    const validateEmail = (email) => {
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email);
    }

    const emailChagehandler = (e) => {
        setEmail(e)
    }
    const passwordChagehandler = (e) => {
        setPassword(e)
    }

    // Use context get and set iLoggedIn state

    const userContext = useContext(AppContext)
    let userContextLoggedIn = userContext.isLoggedIn
    
    const contextUpdater = () =>{
        userContextLoggedIn = true
    }

    // Continuation of form validation

    const submitHandler = (event) => {
        event.preventDefault()
        if(!validateEmail(email)){
            setEmailErr('Your email is invalid!')
        }else{
            setEmail('')
            setPassword('')
            console.log('form has been submitted')
            contextUpdater()
        }
        // !validateEmail(email) && setEmailErr('Your email is invalid!')
    }

    // console.log(userContext.isLoggedIn)


  return (
    <div>
      <form 
      className='flex flex-col gap-3  justify-center text-xl '
      onSubmit={submitHandler}
      >
            <label htmlFor='email'>Email: </label>
            {emailErr.length <=5||emailErr ? <p className='text-red-700'>{emailErr}</p>:null}
            <input 
            name='email' 
            type='email'
            value={email}
            placeholder='example@something.com'
            className='p-2 rounded-md focus:outline-0 focus:bg-slate-100 transition-all'
            onChange={(e) => {emailChagehandler(e.target.value)}}
            /> 
            <label htmlFor='password'>Password: </label>
            <input 
            name='password' 
            type='password'
            value={password}
            placeholder='password'
            className='p-2 rounded-md focus:outline-0 focus:bg-slate-100 transition-all'
            onChange={(e) => {passwordChagehandler(e.target.value)}}
            />
            <p>{JSON.stringify(userContext.isLoggedIn)}</p>
            <button 
            className='text-white p-2 bg-blue-800 rounded-md hover:bg-blue-900 transition-all'
            >Submit</button>
      </form>
    </div>
  )
}

export default Login
