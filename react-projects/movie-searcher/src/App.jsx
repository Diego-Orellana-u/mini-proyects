import React from 'react'
import { useRef, useState, useEffect } from 'react'
import './assets/index.css'
import './assets/app.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'



function useSearch(){
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)
    

    useEffect(() => {
        if(isFirstInput.current){
            isFirstInput.current = search === ''
            return
        }

        if (search === ''){
            setError('You can not search for an empty movie' )
            return
        }

        if (search.length < 3){
            setError('Search have to be at least 3 characters long')
        }

        setError(null)
    } ,[search])

    return { search, updateSearch, error }
}

export function App () {
    const { search, updateSearch, error } = useSearch()
    const { movies, getMovies } = useMovies({ search })

    const handleSubmit = (event) => {
        event.preventDefault()
        getMovies()
    }

    const handleChange = (event) => {
        updateSearch(event.target.value)
    }

    return (
        <div className='page'>

            <header>
                <h1>Buscador De Peliculas</h1>
                <form className='form' onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={search} name='query' placeholder='Search Movie' />
                    <button type='submit'>Search</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </header>

            <main>
                <Movies movies={movies} />
            </main>
        </div>
    )
}