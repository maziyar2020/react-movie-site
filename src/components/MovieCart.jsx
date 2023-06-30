const Movie = ({movie}) => {
    return (
        <div className="movie">
            {/* item name */}
            <div className="movie__name">
                <p>{movie.Year}</p>
            </div>
            {/* movie image */}
            <div className="movie__image">
                <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
            </div>
            {/* movie detail */}
            <div className="movie__detail">
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
}

export default Movie;