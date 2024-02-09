import { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  const [ mousePosition, setMousePosition ] = useState({x: undefined, y: undefined})

  const handleClick = (e) => {
    setMousePosition(prevState => ({...prevState, x: e.clientX, y: e.clientY}))
  }

  const createCircle = () => {
    let circle = <span className='circle' style={{left: mousePosition.x, top: mousePosition.y}}></span>
    document.body.appendChild(circle)
  }

  useEffect(() => {
    createCircle()
  },[mousePosition])
  

  console.log(mousePosition)

  return (
    <div className='page' onClick={handleClick}>
    </div>
  )
}
