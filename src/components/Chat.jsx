import { useContext } from 'react'
import { userContext } from '../App'
import ChatBox from './ChatBox/ChatBox'
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'

function Chat() {

    const context = useContext(userContext)
    console.log(context)

    // Get logged in state from local storage

    const userLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn:"))

    const ifUserIsLoggedIn = context.isLoggedIn

    console.log(ifUserIsLoggedIn)

  return (
      <div className='p-6 md:p-20 bg-red-500 h-[100vh] flex flex-col bg-gradient-to-r from-violet-500 to-fuchsia-500 relative '>
          {/* Animated Boxes */}
          <div className='w-[20%] h-[60%] bg-red-400 absolute top-0 left-0 animate-pulse'>
              
          </div>
          <div className='w-[20%] h-[60%] bg-red-400 absolute bottom-0 right-0
          animate-pulse delay-1000'>
              
          </div>
          <div className='w-[40%] h-[25%] bg-red-400 absolute top-0 right-0'>
              
          </div>
          <div className='w-[60%] h-[15%] bg-red-400 absolute bottom-0 left-0'>
              
          </div>
          {/* This the login/signup parent component */}

          <div className='justify-center items-center border rounded-xl h-full p-10 bg-slate-400 bg-opacity-50 backdrop-blur-sm '>

          <h1 className='text-center text-2xl md:text-4xl font-bold mb-4 '>Chat with bros🔥🔥</h1>
          {
              ifUserIsLoggedIn === true ?
              <SignUp />
              :
            //   <Login />
              <ChatBox />
          }
          </div>
      </div>
  )
}

export default Chat