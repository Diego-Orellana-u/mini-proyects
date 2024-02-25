import './assets/index.css'
import './assets/app.css'
import React, { useEffect, useState, useRef } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function useSearch () {
    const [ search, updateSearch ] = useState('')
    const [ error, setError ] = useState('')
    const isFirstInput = useRef(true)

    useEffect(() => {
        if(isFirstInput.current){
            isFirstInput.current = search === ''
            return
        }
        if(search === ''){
            setError(`We couldn't find movies by this name`)
            return
        }
    
        if(search.match(/^\d+$/ )){
            setError(`You can't search a number`)
            return
        }
    
        if(search.length < 3){
            setError(`Search has to have at least three characters`)
            return
        }
        setError(null)
    },[search])

    return { search, updateSearch, error }

}

let user = {
    name: 'Diego',
    lastName: 'Orellana',
    traits: {
        character: 'kind, gentle, assertive, responsible',
        physical: 'muscular',
        blabla: 'hello'
    }
}
// console.log(user)
let clone = {}

Object.assign(clone, user)

console.log(clone.traits === user.traits)

console.log(clone)
console.log(user)

export function App () {
    const { search, updateSearch, error } = useSearch()
    const { movies, getMovies } = useMovies({search})

    const handleSubmit = (event) => {
        event.preventDefault()
        getMovies()
    }

    const handleChange = (event) => {
        const newQuery = event.target.value
        updateSearch(newQuery)    
    }

    return (
        <div className='page'>
            <header>
                <h1>Movie Searcher</h1>
                <form className='form' onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={search} name='query' placeholder='Batman, Avengers, etc' />
                    <button>Search Movie</button>
                </form>
                {error && <p style={{color: 'red'}}>{error}</p>}
            </header>
            <main>
                <ul className='movies'>
                    <Movies movies={movies}/> 
                </ul>
            </main>
        </div>
        
    )
}

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this
    }
};