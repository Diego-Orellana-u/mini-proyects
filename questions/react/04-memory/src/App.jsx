import { useState } from 'react'
import './App.css'
import { useId } from 'react'
import { useEffect } from 'react'

export default function App(){
  const [ cards, setCards ] = useState([
    {id: 0 , code: undefined, visible: false},
    {id: 1, code: undefined, visible: false},
    {id: 2, code: undefined, visible: false},
    {id: 3, code: undefined, visible: false},
    {id: 4, code: undefined, visible: false},
    {id: 5, code: undefined, visible: false},
    {id: 6, code: undefined, visible: false},
    {id: 7, code: undefined, visible: false},
    {id: 8, code: undefined, visible: false},
    {id: 9, code: undefined, visible: false},
    {id: 10, code: undefined, visible: false},
    {id: 11, code: undefined, visible: false},
    {id: 12, code: undefined, visible: false},
    {id: 13, code: undefined, visible: false},
    {id: 14, code: undefined, visible: false},
    {id: 15, code: undefined, visible: false},
  ])

  const [ selected, setSelected ] = useState([])

  function pickRandomLetters(num){
    const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
    let randomLetters = []

    for(let i = 0; i < num; i++){
      const random = Math.floor(Math.random() * letters.length)
      if(randomLetters.includes(letters[random])){
        i--
        continue 
      }
      randomLetters.push(letters[random])
    }
    return randomLetters
  }

  function randomizeArr(array){
    for(let i = array.length - 1; i > 0;i--){
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  const handleStart = () => {
    let initialArr = pickRandomLetters(8)
    let duplicatedArr = [...initialArr,...initialArr]
    
    let shuffledArr = randomizeArr(duplicatedArr)

    let newCards = cards.map((card, index) => ({
      ...card,
      code: shuffledArr[index],
      visible: false
    }))

    setCards(newCards)
  }

  const handleSelect = (e, index) => {
    if(cards[index].visible) return
    setSelected(prevState => ([...prevState, index]))

    let newCards = cards.map((card, indexa) => ({
      ...card,
      visible:(card.visible == true) ? true : (indexa == index) ? true : false
    }))

    setCards(newCards)

  }

  useEffect(() => {
    let aCard = cards[selected[selected.length - 1]]
    let bCard = cards[selected[selected.length - 2]]

    console.log(aCard)

    if(!aCard) return
    if(selected.length % 2 != 0) return
    
    if(aCard.code != bCard.code){
      let newCards = cards.map(card => ({
        ...card,
        visible:(card.id == aCard.id || card.id == bCard.id) ? false : card.visible
      }))
      setTimeout(() => {setCards(newCards)}, 500)
    }
  },[selected])

  const cardId = useId()

  return(
    <>
      <div className='board'>
        {
          cards.map((card, index) => {
            return(
              <div key={`${cardId} - ${index}`} className='card'  onClick={(e) => handleSelect(e,index)}>
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