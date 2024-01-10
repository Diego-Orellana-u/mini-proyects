const API_KEY = '2857aebf'

export const searchMovies = async ({search}) => {
    if(search === '') return null

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await response.json()
        const movieResults = json.Search

        return movieResults?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            poster: movie.Poster,
            year: movie.Year
        }))
    } catch (error) {
        throw new Error('Error Searching Movies')
    }
    
}  