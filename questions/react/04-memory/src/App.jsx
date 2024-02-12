import { useState } from 'react'
import { useId } from 'react'
import './App.css'
import { useCards } from './hooks/useCards'
import { pickRandomLetters } from './logic/pickRandomLetters'
import { randomizeArray } from './logic/randomizeArray'


export default function App(){

  const [ selected, setSelected ] = useState([])
  const { cards, setCards } = useCards({selected})

  const handleStart = () => {
    let initialArr = pickRandomLetters(8)
    
    let shuffledArr = randomizeArray([...initialArr,...initialArr])

    let newCards = cards.map((card, index) => ({
      ...card,
      code: shuffledArr[index],
      visible: false
    }))

    setCards(newCards)
  }

  const handleSelect = (index) => {
    if(!cards[index].code) return
    if(cards[index].visible) return //prevent selecting an already guessed card

    if(selected.length >= 2 ){ 
      setSelected([])
    }

    setSelected(prevState => ([...prevState, index]))

    let newCards = cards.map((card, indexa) => ({
      ...card,
      visible:(card.visible == true) ? true : (indexa == index) ? true : false
    }))

    setCards(newCards)
  }

  const cardId = useId()

  return(
    <>
      <div className='board'>
        {
          cards.map((card, index) => {
            return(
              <div key={`${cardId} - ${index}`} className='card'  onClick={(e) => handleSelect(index)}>
                <span className='code' style={{display: card?.visible ? "block" : "none"}}>{card.code}</span>
              </div>
            )
          })
        }
      </div>
      <button className='btn' onClick={handleStart}>Start Game</button>
    </>
  )
}