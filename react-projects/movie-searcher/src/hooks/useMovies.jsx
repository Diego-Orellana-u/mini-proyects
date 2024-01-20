import { useState } from 'react'
import noResponse from '../mocks/noResponse.json'

export function useMovies({ search }) {
    const [ responseMovies, setResponseMovies ] = useState([])

    const movies = responseMovies.Search

    const mappedMovies = movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))

    const MOVIE_LIST_API = `http://www.omdbapi.com/?apikey=2857aebf&s=${search}`

    const getMovies = () => {
        if(search) {
            fetch(MOVIE_LIST_API)
            .then(res => res.json())
            .then(data => {
                setResponseMovies(data)
            })
        }else {
            setResponseMovies(noResponse)
        }
    }

    return { movies: mappedMovies, getMovies }
}
