import { useState } from 'react'

export function useMovies() {
    const [ movies, setMovies ] = useState(null)
    const mappedMovies = movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))

    return { movies: mappedMovies }
}
