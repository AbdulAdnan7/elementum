import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ImageTextSection from './components/ImageTextSection'
import Steps from './components/Steps'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
     <Hero />
     <Steps />
    </>
  )
}

export default App
