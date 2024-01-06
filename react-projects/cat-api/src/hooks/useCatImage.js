import { useState, useEffect } from 'react'

export function useCatImage ({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if(!fact) return
        const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')
        console.log(threeFirstWords)

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?json=true`)
            .then(res => res.json())
            .then(response => {
                const { _id } = response
                console.log(_id)
                setImageUrl(`${_id}/says/${threeFirstWords}`)
            })
    },[fact])
    return { imageUrl }
}