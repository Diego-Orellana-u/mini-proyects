import { useEffect, useState } from "react"


export function useSyno() {

    const [ word, setWord ] = useState(null)
    const [ synonysms, setSynonyms ] = useState(null)
    
    const API_LINK = `https://api.datamuse.com/words?ml=${word}`

    function handleSubmit(e){
        e.preventDefault()
        const formData = new window.FormData(e.target)
        const userWord = formData.get('query')
        setWord(userWord)
      }

    useEffect(() => {
        if(!word) return
        fetch(API_LINK)
          .then(res => res.json())
          .then(synonysms => {
            setSynonyms(synonysms)
          })
    },[word])

    return { synonysms, word, setWord, handleSubmit }
}