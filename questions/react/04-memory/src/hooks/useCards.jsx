import { useEffect } from "react"
import { useState } from "react"

export function useCards({selected}){

    const [ cards, setCards ] = useState(
      new Array(16)
          .fill("")
          .map((_,index) => ({id: index , code: undefined, visible: false}))
    )
  
    useEffect(() => {
        let aCard = cards[selected[0]]
        let bCard = cards[selected[1]]
    
        if((selected.length % 2 != 0) || !aCard) return
        
        if(aCard.code != bCard.code){
          let newCards = cards.map(card => ({
            ...card,
            visible:(card.id == aCard.id || card.id == bCard.id) ? false : card.visible
          }))
          setTimeout(() => setCards(newCards), 500)
        }
      },[selected])
  
      return {cards, setCards}
  }