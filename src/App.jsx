import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import Category from './components/category'
import Toprestraunts from './components/Toprestraunts'
import Online from './components/Online'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Category/>
      <Hero/>
      <Toprestraunts/>
      <Online/>
      <Footer/>
    </>
  )
}

export default App
