import { useId, useState } from 'react'
import './App.css'

export default function App() {

  const [ circles, setCircles ] = useState([])
  const [ deleted, setDeleted ] = useState([])
  
  function createCircle(e){
    const { clientX, clientY } = e 
    setCircles(prevState => ([...prevState, {x: clientX ,y: clientY}]))
  }

  const handleUndo = () => {
    if(!circles.length) return
    
    
    const newCircles = [...circles]
    const deletedCircle = newCircles.pop()
    setDeleted(prevState => ([...prevState, deletedCircle]))
    setCircles(newCircles)
  }

  const handleRedo = () => {
    if(!deleted.length) return
    const newDeleted = [...deleted]
    const redoCircle = newDeleted.pop()

    setDeleted(newDeleted)
    
    setCircles(prevState => ([...prevState, redoCircle]))
  }

  const circleId = useId()

 return(
  <>
    <button className='btn' onClick={handleUndo} style={{backgroundColor: circles.length ? 'gray' : '#3a3a3ab8'}}>UNDO</button>
    <button className='btn' onClick={handleRedo} style={{ backgroundColor: deleted.length ? 'gray' : '#3a3a3ab8'}}>REDO</button>
    <div className='page' onClick={createCircle}></div>
    {
      circles.map((circle, index) => {
        return (
          <div className='circle' key={`${circleId} - ${index}`} style={{left: circle.x - 25, top: circle.y - 25}}></div>
        )
      })
    }
  </>
 )
}