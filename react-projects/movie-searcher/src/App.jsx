import './assets/index.css'
import './assets/app.css'
import React, { useEffect, useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'


export function App () {
    const [ query, setQuery ] = useState('')
    const { movies: mappedMovies} = useMovies()
    const [ error, setError ] = useState('')

    const MOVIE_LIST_API = `http://www.omdbapi.com/?apikey=2857aebf&s=${query}`

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(query)
    }

    const handleChange = (event) => {
        const newQuery = event.target.value
        if(newQuery.startsWith(' ')) return
       setQuery(newQuery) 

        if(query === ''){
            setError(`We couldn't find movies by this name`)
            return
        }

        if(query.match(/^\d+$/ )){
            setError(`You can't search a number`)
            return
        }

        if(query.length < 3){
            setError(`Search has to have at least three characters`)
            return
        }

        setError(null)
    }

    useEffect(() => {
        
        fetch(MOVIE_LIST_API)
            .then(res => res.json())
            .then(data => {
                const movieList = data.Search
                console.log(movieList)
            })
    },[query])

    return (
        <div className='page'>
            <header>
                <h1>Movie Searcher</h1>
                <form className='form' onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={query} name='query' placeholder='Batman, Avengers, etc' />
                    <button>Search Movie</button>
                </form>
                {error && <p style={{color: 'red'}}>{error}</p>}
            </header>
            <main>
                <ul className='movies'>
                    <Movies movies={mappedMovies}/> 
                </ul>
            </main>
        </div>
        
    )
}