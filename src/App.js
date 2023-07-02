import axios from 'axios'
import { useEffect, useState } from 'react'
import MovieCart from './components/MovieCart'
import searchIcon from './styles/images/search.svg'
// a1810976

const API_URL = "https://www.omdbapi.com?apikey=a1810976"

const App = () => {

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    // api call for movies
    const searchMovies = async (title) => {
        // retrive data from api call
        const { data } = await axios.get(`${API_URL}&s=${title}`)
        // store the data in movies array
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman')
    }, [])


    return (
        <div className="app">
            <h1>MovieLand</h1>
            {/* header and searchbar */}
            <header className="search">
                <input
                    type="text"
                    placeholder="search for movies"
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value) }}
                />
                <img src={searchIcon} alt="searchIcon" onClick={() => { searchMovies(searchTerm) }} />
            </header>
            {/* cards container */}
            {
                // check for movies 
                // if respond had no lenght then render message
                movies?.length ?
                    (
                        <div className="movie-carts container">
                            {movies.map(movie => <MovieCart movie={movie} />)
                            }
                        </div>
                    ) :
                    <div className="empty">
                        <h2>no Movies found</h2>
                    </div>
            }
        </div>
    );
}

export default App;