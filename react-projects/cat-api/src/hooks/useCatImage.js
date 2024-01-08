import { useState, useEffect } from 'react'
import { getRandomImage } from '../services/image'

export const useCatImage = ({ fact }) => {
    const [imageUrl, setImageUrl ] = useState()

    useEffect(() => {
        if(!fact) return
        const firstThreeWords = fact.split(' ').slice(0, 3).join(' ')

        getRandomImage({firstThreeWords}).then(imgUrl => setImageUrl(imgUrl))

    }, [fact])

    return { imageUrl }
}