import './App.css'
import {createContext, useState} from 'react'
import Chat from './components/Chat'
import { Route, Routes } from 'react-router-dom'
import ChatBox from './components/ChatBox/ChatBox'


const userContextValue = {
    isLoggedIn: true,
    time: 2020,
    messages: [
      {
        id: 2345331212,
        msg: 'Hello there my boss',
      },
      {
        id: 2345331212,
        msg: 'Hello there my boss',
      },
      {
        id: 2345331212,
        msg: 'Hello there my boss',
      },
      {
        id: 2345331212,
        msg: 'Hello there my boss',
      },
    ],
    name: 'Ogunmekpon'
  }

  export const userContext = createContext(userContextValue)



function App() {

  return (
    <userContext.Provider value={userContextValue}>
      <div className="App">
        <Routes>
          <Route index element= {<Chat /> } />
          <Route path='/chats' element= {<ChatBox /> } />
        </Routes>
        
      </div>
    </userContext.Provider>
  )
}

export default App
