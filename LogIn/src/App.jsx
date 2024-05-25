import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import reactLogo from './assets/react.svg'
import { Outlet } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default App