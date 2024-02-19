import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'

const TIMEOUT = 1000

const SLIDES = [
  "https://picsum.photos/id/10/300/100",
  "https://picsum.photos/id/20/300/100",
  "https://picsum.photos/id/30/300/100",
]

const Controls = ({ selected, setSelected }) => {

  const interval = useRef()

  const handleNext = () => {
    if(selected === 2){
      setSelected(0)
      return
    }
    console.log(selected)

    setSelected(prevState => prevState + 1)
  }

  const handlePrev = () => {
    if(selected === 0){
      setSelected(2)
      return
    }

    setSelected(prevState => prevState - 1)
  }
  
  const handlePlay = (e) => {
    interval.current = setInterval(() => setSelected(prevState => (
      (prevState + 1) % SLIDES.length
      
    )), TIMEOUT)
  }

  const handleStop = () => {
    clearInterval(interval.current)
  }
  
  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}

const Slide = ({ slideNumber }) => <img src={SLIDES[slideNumber]} />

const Slider = () => {
  const [ selected, setSelected ] = useState(0)

  return(
    <>
      <Slide slideNumber={selected} />
      <Controls selected={selected} setSelected={setSelected} />

      <ul>
        <li>Click Prev - show previous picture</li>
        <li>Click Next - show next picture</li>
        <li>Click Play - slide pictures circular way </li>
        <li>Click Stop - stop slider</li>
      </ul>
    </>
  )
}


export default Slider