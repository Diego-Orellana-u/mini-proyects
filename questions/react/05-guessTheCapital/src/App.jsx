import { useEffect, useId, useState } from 'react'
import './App.css'

let data = {
  Germany: "Berlin", 
  Azerbaijan: "Baku"
}

export default function App(){

  const [ order, setOrder ] = useState([])
  const [ index, setIndex ] =  useState([])
  const [ error, setError ] = useState([])

  function orderFunc(data){
    let countries = Object.keys(data)
    let cities = Object.values(data)

    let order = randomizer([...countries, ...cities])
    setOrder(order)

  }
  function randomizer(array){
    for(let i = array.length - 1; i > 0;i--){
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  const handleClick = (e) => {
    const buttonClicked = e.target.innerHTML
    const buttonKeysUbi = Object.keys(data).indexOf(`${buttonClicked}`)
    const buttonValuesUbi = Object.values(data).indexOf(`${buttonClicked}`)

    const newArr = [...index]

    if(buttonKeysUbi >= 0){
      newArr.push([buttonKeysUbi, buttonClicked])
      setIndex(newArr)
    } else if(buttonValuesUbi >= 0){
      newArr.push([buttonValuesUbi, buttonClicked])
      setIndex(newArr)
    }
  }


  useEffect(() => {
    if(!index.length) return
    const btnColor = index[index.length - 1][1]
    document.getElementById(btnColor).style.backgroundColor = "#6CB4EE"
    setError([])

    if(index.length < 2) return
    if(index[0][0] !== index[1][0]){
      const btnColor1 = index[index.length - 2][1]
      const btnColor2 = index[index.length - 1][1]

      setError([btnColor1, btnColor2])

      setIndex([])
    }

    if(index[0][0] === index[1][0]){
      const btn1 = index[0][1]
      const btn2 = index[1][1]

      document.getElementById(btn1).remove()
      document.getElementById(btn2).remove()

      setIndex([])
    }
    

    
    if(!document.querySelector('.someDiv').childNodes.length){
      let congratulations = document.createElement("p")

      document.querySelector('.someDiv').appendChild(congratulations)
      document.querySelector('.someDiv').textContent = "Congratulations!"
    }
  },[index])

  const btnId = useId()

  return(
    <>
      <button onClick={() => orderFunc(data)}>Start Game</button>
      <div className='someDiv'>
        {
          order.map((btn, index) => {
            return(
              <button className='btn' style={{backgroundColor: error.includes(btn) ? 'red' : '#1a1a1a'}} id={btn} key={`${btnId} - ${index}`} onClick={handleClick}>{btn}</button>
            )
          })
        }
      </div>
    </>
  )
}