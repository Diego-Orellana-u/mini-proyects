import { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  const [ mousePosition, setMousePosition ] = useState({x: undefined, y: undefined})
  const [ lastCircle, setLastCircle ] = useState([])

  const handleClick = (e) => {
    setMousePosition(prevState => ({...prevState, x: e.clientX, y: e.clientY}))
  }

  const createCircle = () => {
    let container = document.querySelector(".page")
    let circle = document.createElement("div")
    circle.classList.add('circle')

    container.appendChild(circle)

    circle.style.left = `${mousePosition.x - 17}px`
    circle.style.top = `${mousePosition.y - 60}px`

  }

  useEffect(() => {
    if(!mousePosition.x) return
    createCircle()
  },[mousePosition])

  const handleUndo = () => {
    let page = document.querySelector('.page')
    let lastChild = page.lastChild

    if(!lastChild) return false
    
    let lastToStr = lastChild.outerHTML

    let lastCircleCopy = [...lastCircle, lastToStr ]
    setLastCircle(lastCircleCopy)
    lastChild.remove()
  }
  
  const handleRedo = () => {
    let page = document.querySelector('.page')
    let redoChild = lastCircle[lastCircle.length - 1]
    
    let childNode = new DOMParser().parseFromString(redoChild, 'text/html').body.lastChild
    page.appendChild(childNode)
    
    setLastCircle(lastCircle.filter(node => node != redoChild))
  }

  return (
    <>
      <button className='button'style={{backgroundColor: mousePosition.x ? 'gray' : '#3a3a3ab8'}} onClick={mousePosition.x ? handleUndo : undefined}>
        UNDO
      </button>
      <button className='button' style={{backgroundColor: lastCircle.length > 0 ? 'gray' : '#3a3a3ab8'}} onClick={lastCircle.length > 0 ? handleRedo : undefined}>
        REDO
      </button>
      <div className='page' onClick={handleClick}>
      </div>
    </>
  )
}
