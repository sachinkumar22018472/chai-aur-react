import './App.css'
import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"
import Reac, {useState} from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
        <h1>React with chai share is important</h1>

        <Login />
        <Profile />

    </ UserContextProvider>
  )
}

export default App
