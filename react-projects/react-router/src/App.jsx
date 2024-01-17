import { useState } from 'react'
import { useEffect } from 'react'
import { EVENTS } from './consts'
import { navigate } from './Link.jsx'
import './App.css'
import HomePage from './pages/Home'
import AboutPage from './pages/About.jsx'





export default function App() {
  const [ currentPath, setCurrentPath ] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () =>{
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  },[])

  return (
    <main>
      {currentPath === '/' && <HomePage navigate={navigate}/>}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}
