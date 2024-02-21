import { useEffect, useId, useState } from 'react'
import './App.css'

export default function App() {
  const numbers = [1,2,3,4,5,6,7,8,9,0]

  const [ passcode, setPasscode ] = useState()
  const [ userInput, setUserInput ] = useState('')

  function askPasscode(){
    const secretPasscode = prompt('Write your secret passcode', 0)

    setPasscode(secretPasscode)
  }

  const handleBtnClick = (e) => {
    let value = e.target.innerHTML

    setUserInput(prevState => (prevState + value))
  }

  useEffect(() => {
    if(userInput === passcode){
      console.log("correct password")
    }
  }, [userInput])

  const btnId = useId()

  const asterisco = Array.from(userInput).map(inp => "*").join('')

  return(
    <>
      <button className='btn-passcode' onClick={askPasscode}>Set Passcode</button>
      <div>
        <p>Enter Passcode</p>
      </div>

      <div>
        <form >
          <input className='input-passcode' id='passcode' value={asterisco} readOnly/>
          <label htmlFor='passcode'>OK</label>
        </form>
      </div>

      <div className='btn__container'>
        {
          numbers.map((number, index) => (
            <button className='btn' key={`${btnId} - ${index}`} onClick={handleBtnClick}>{number}</button>   
          ))
        }
      </div>
      <div>
        {
          userInput === passcode && <p>Correct Passcode!</p>
        }
      </div>
    </>
  )
}