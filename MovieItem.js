import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
    const { addFavorite } = useContext(MovieContext);

    return (
        <div className="movie-item">
            <h3>{movie.Title}</h3>
            <p>Release Date: {movie.Year}</p>
            <button onClick={() => addFavorite(movie)}>Add to Favorites</button>
            <Link to={`/movie/${movie.imdbID}`}>View Details</Link>
        </div>
    );
};

export default MovieItem;