const API_KEY = '5670e147';
export async function searchMovies({ search }) {
    if (search === '') return null;
    
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`);
        const json = await response.json();

        const movies = json.Search;
  
        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }))
    } catch {
        throw new Error('Error searching movies.')
    }
}