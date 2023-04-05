import './App.css'
import {createContext} from 'react'
import Chat from './components/Chat'

export const AppContext = createContext()

const userContextValue = {
  isLoggedIn: false,
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

function App() {
  return (
    <AppContext.Provider value={userContextValue}>
      <div className="App">
        <Chat />
      </div>
    </AppContext.Provider>
  )
}

export default App
