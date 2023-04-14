import React from 'react'
import { ToastContainer, toast } from 'react-toastify';


function ChatBox() {
  return (
    // <div>
    //   <ToastContainer />
    //   <h1 className='text-xl md:text-2xl text-center'>Chat Boxes</h1>

    // </div>

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
          <p>Chat Box</p>
          </div>
      </div>
  )
}

export default ChatBox
