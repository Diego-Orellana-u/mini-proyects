import { Movies } from './components/movies'
import './assets/index.css'
import { useState, useMemo } from 'react'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

export function App () {
    const [ sort, setSort ] = useState(false)
    const { search, updateSearch, error } = useSearch()
    const { movies, loading, getMovies } = useMovies({ search, sort })


    const debouncedGetMovies = useMemo(() => 
        debounce(search => {
        console.log('search', search)
        getMovies({ search })
    }, 300)
    ,[getMovies])

    const handleSubmit = (e) => {
        e.preventDefault()
        getMovies({ search })
    }

    const handleSort = () => {
        setSort(!sort)
    }

    const handleChange = (event) => {
        const newSearch = event.target.value
        updateSearch(newSearch)
        debouncedGetMovies(newSearch)
    }
    
    return (
        <div className='page'>
            <header>
                <h1>Buscador De Películas</h1>
                <form className='form' onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={search} name='query' placeholder='Inception, Willy Wonka, etc'/>
                    <input type='checkbox' onChange={handleSort} checked={sort} />
                    <button type="submit">Search Movie</button>
                </form>
                {error && <p style={{color: 'red'}}>{error}</p>}
            </header>

            <main>
                {
                    loading ? <p>Loading Movies...</p> : <Movies movieResults={movies}/>
                }
            </main>
        </div>
    )
}