import React from 'react'
import '../assets/app.css'

function WithMovies ({movieResults}) {
    return (
        <ul className='movies'>
            {
                movieResults.map(movie => (
                    <li key={movie.id} className='movie'>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.poster} alt={movie.title} />
                    </li>
                ))
            }
        </ul>
    )
}

function NoMovies () {
    return (
        <p>No movies Found</p>
    )
}

export function Movies ({movieResults}) {
    const hasMovies = movieResults?.length > 0

    return (
        hasMovies ? (
            <WithMovies movieResults={movieResults}/>
        ) : (
            <NoMovies />
        )
    )
}