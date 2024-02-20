import { useEffect, useId, useState } from 'react'
import './App.css'
import { randomizer } from './logic/randomizer'

let data = {
  Germany: "Berlin", 
  Azerbaijan: "Baku"
}

function CountryCapitalGame(){

  const [ order, setOrder ] = useState(undefined)
  const [ selected, setSelected ] = useState([])
  const [ error, setError ] = useState([])

  function handleStart(){
    const countries = Object.keys(data)
    const cities = Object.values(data)

    const order = [...countries, ...cities]
    const randomOrder = randomizer(order)

    setOrder(randomOrder)
  }

  const handleSelected = (btn) => {
    const newSelected = [...selected]
    newSelected.push(btn)

    setSelected(newSelected)
    setError([])
  }

  useEffect(() => {
    if(selected.length < 2) return

    if(selected.length === 2){
      const firResponse = Object.entries(data)[0]
      const secResponse = Object.entries(data)[1]    

      const firSelected = selected[0]
      const secSelected = selected[1]
      
      if(
        (firResponse.includes(firSelected) && firResponse.includes(secSelected)) ||
        (secResponse.includes(firSelected) && secResponse.includes(secSelected))
        ){
        setOrder(order.filter(btn => btn !== firSelected && btn !== secSelected))
      }else{
        setError([firSelected, secSelected])
      }
      setSelected([])
    } 
  },[selected])

  const btnId = useId()

  return(
    <>
      <div>
        <button onClick={handleStart}>Start game</button>
      </div>
      {
        !(typeof(order) === 'undefined') &&
        order.map((btn, index) => (
          <button style={{ backgroundColor: error.includes(btn) ? 'red' : selected.includes(btn) ? '#0096FF' : '#1a1a1a'}} key={`${btnId} - ${index}`} onClick={() => handleSelected(btn)}>{btn}</button>     
        ))
      }
      {
        (typeof(order) !== 'undefined' && order.length == 0) && <p style={{color: 'green'}}>Congratulations!</p>
      }
    </>

  )
}

export default function App(){
  return(
    <>
      <CountryCapitalGame />
    </>
  )
}