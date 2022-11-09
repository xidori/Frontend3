import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import Home from './Pages/Home'
import ShopDashboard from './Pages/ShopDashboard'

function App() {
  const [count, setCount] = useState(0)

  const sumaLikes=() => {
     //setCount(prev => prev + 1)
     setCount(count => count + 1)
  }

  return (
  <>
    <ShopDashboard titulo='DASHBOARD'/>
    <Login/>
    <Home sumar={sumaLikes}/>
    <h1>{count}</h1>
  </>    
  )
}

export default App
