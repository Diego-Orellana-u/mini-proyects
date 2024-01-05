import { useState, useEffect } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = `https://cataas.com/cat/`
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`

export function App(){
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)
                
                const threeFirstWords = fact.split(' ', 3).join(' ')
                console.log(threeFirstWords)

                fetch( `https://cataas.com/cat/says/${threeFirstWords}?json=true`)
                    .then(res => res.json())
                    .then(response => {
                        const { _id } = response
                        setImageUrl(`${_id}/says/${threeFirstWords}`)
                        console.log(`${CAT_PREFIX_IMAGE_URL}${imageUrl}/?fontSize=50&fontColor=white`)
            })
            })
        
    },[])



    return (
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt="image from a cat saying the first three words in the cats fact" />}
        </main>
    )
}