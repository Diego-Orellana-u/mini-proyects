import { useId, useState } from 'react'
import './App.css'

export default function App(){
  const [ circles, setCircles ] = useState([])
  const [ deleted, setDeleted ] = useState([])

  const handleClick = (e) => {
    const { clientX, clientY } = e

    setCircles(prevState => ([...prevState, { x: clientX, y: clientY }])) //spread operator to copy all elements from circles
  }

  const handleUndo = () => {
    if(!circles.length) return
    const newCircles = [...circles]
    const deletedCircle = newCircles.pop()
    setCircles(newCircles)
    setDeleted(prevState => ([...prevState, deletedCircle]))
  }

  const handleRedo = () => {
    const newDeleted = [...deleted]
    const renewedCircle = newDeleted.pop()
    if(!renewedCircle) return
    setDeleted(newDeleted)
    setCircles(prevState => ([...prevState, renewedCircle]))
  }

  const circleId = useId()

  return(
    <>
      <button className='btn' onClick={handleUndo}>UNDO</button>
      <button className='btn' onClick={handleRedo}>REDO</button>
      <div className='page' onClick={handleClick}>
        {
          circles.map((circle, index) => {
            return(
              <div key={`${circleId} - ${index}`} className='circle' style={{left: circle.x - 20, top: circle.y - 20}}></div>
            )
          })
        }
      </div>
    </>
  )
}




































// export default function App() {

//   const [ circles, setCircles ] = useState([])
//   const [ deleted, setDeleted ] = useState([])
  
//   function createCircle(e){
//     const { clientX, clientY } = e 
//     setCircles(prevState => ([...prevState, {x: clientX ,y: clientY}]))
//   }

//   const handleUndo = () => {
    
//     const newCircles = [...circles]
//     const deletedCircle = newCircles.pop()
//     if(!deletedCircle) return
//     setDeleted(prevState => ([...prevState, deletedCircle]))
//     setCircles(newCircles)
//   }

//   const handleRedo = () => {
//     if(!deleted.length) return
    
//     const newDeleted = [...deleted]
//     const redoCircle = newDeleted.pop()
    
//     setDeleted(newDeleted)
    
//     setCircles(prevState => ([...prevState, redoCircle]))
//   }

//   const circleId = useId()

//  return(
//   <>
//     <button className='btn' onClick={handleUndo} style={{backgroundColor: circles.length ? 'gray' : '#3a3a3ab8'}}>UNDO</button>
//     <button className='btn' onClick={handleRedo} style={{ backgroundColor: deleted.length ? 'gray' : '#3a3a3ab8'}}>REDO</button>
//     <div className='page' onClick={createCircle}></div>
//     {
//       circles.map((circle, index) => {
//         return (
//           <div className='circle' key={`${circleId} - ${index}`} style={{left: circle.x - 25, top: circle.y - 25}}></div>
//         )
//       })
//     }
//   </>
//  )
// }