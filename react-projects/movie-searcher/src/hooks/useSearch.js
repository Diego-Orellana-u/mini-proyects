import { useState, useRef, useEffect } from 'react'
export function useSearch() {
    const [ search, updateSearch ] = useState('')
    const [ error, setError ] = useState(null)
    const isFirstInput = useRef(true)

    useEffect(() => {
        if(isFirstInput.current){
            isFirstInput.current = search === ''
            return
        }

        if(search === ''){
            setError('You can not search for empty titles')
            return
        }

        if(search.match(/^\d+$/)){
            setError('You can not search a movie by a number')
            return
        }

        if(search.length < 3){
            setError('Titles have to be longer than 3 characters')
            return
        }

        setError(null)
    }, [search])

    return { search, updateSearch, error }
}