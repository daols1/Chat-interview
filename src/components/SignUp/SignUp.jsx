import React, { useState  } from 'react'
import { redirect, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function SignUp() {
  // Form local state logic for form validation
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [password, setPassword] = useState('')

    const validateEmail = (email) => {
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email);
    }

    const nameChagehandler = (e) => {
        setName(e)
    }
    const emailChagehandler = (e) => {
        setEmail(e)
    }
    const passwordChagehandler = (e) => {
        setPassword(e)
    }

    // Use context get and set state

    // let [userContextValue, setUserContextValue] = useContext(AppContext)
    
    
    // Continuation of form validation

    const submitHandler = (event) => {
        event.preventDefault()
        if(!validateEmail(email)){
            setEmailErr('Your email is invalid!')
        }else{
            localStorage.setItem("Name:", JSON.stringify(name))
            localStorage.setItem("Email:", JSON.stringify(email))
            localStorage.setItem("Password:", JSON.stringify(password))
            localStorage.setItem("isLoggedIn", true)
            setName('')
            setEmail('')
            setPassword('')
            toast.success('Sign up Succesfull', {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            console.log('form has been submitted')
        }
        // !validateEmail(email) && setEmailErr('Your email is invalid!')
    }

    // Navigator
    const navigate = useNavigate()


    const buttonHandler = () => {
      navigate('/chats')
      console.log("Clicked the submit button")
    }

    // console.log(userContext.isLoggedIn)


  return (
    <div>
      <ToastContainer />
      <h1 className='text-xl md:text-2xl text-center'>Sign Up</h1>
      <form 
      className='flex flex-col gap-3  justify-center text-sm md:text-xl '
      onSubmit={submitHandler}
      >
        <label htmlFor='name'>Name: </label>
        <input 
        name='name' 
        type='text'
        value={name}
        placeholder='John Doe'
        className='p-2 rounded-md focus:outline-0 focus:bg-slate-100 transition-all'
        onChange={(e) => {nameChagehandler(e.target.value)}}
        />
        <label htmlFor='email'>Email: </label>
        {emailErr.length <=5||emailErr ? <p className= {`text-red-700 ${!emailErr ? 'hidden' : 'block'} `} >{emailErr}</p>:null}
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
        {/* <p>{JSON.stringify(userContext.isLoggedIn)}</p> */}
        <button 
        className='text-white p-2 bg-blue-800 rounded-md hover:bg-blue-900 transition-all'
        onClick={buttonHandler}
        >Submit</button>
      </form>
      {/* {userContextValue} */}
    </div>
  )
}

export default SignUp