import React from 'react'
import { useCatImage } from './hooks/useCatImage'
import { useGetRandomFact } from './hooks/useGetRandomFact'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/'


export function App () {
    const { fact, refreshRandomFact } = useGetRandomFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = async () => {
        refreshRandomFact()
    }

    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Refresh Cat Fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}?fontSize=50&fontColor=white`} alt="Cat image with a text that includes the first three words of the cats fact" />}

        </main>
    )
}



































// import React from 'react'
// import { useCatImage } from './hooks/useCatImage'
// import { useGetRandomFact} from './hooks/useCatFact'

// const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/'

// export function App(){
//     const { fact, refreshRandomFact } = useGetRandomFact()
//     const { imageUrl } = useCatImage({ fact })

//     const handleClick = async () => {
//         refreshRandomFact()
//     }

//     return(
//         <main>
//             <h1>App de gatitos</h1>

//             <button onClick={handleClick}>Get New Fact</button>
//             {fact && <p>{fact}</p>}
//             {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}?fontSize=50&fontColor=white`} alt="Cat image with the first three words of the first random fact"/>}
//         </main>
//     )
// }
