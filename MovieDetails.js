import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=YOUR_API_KEY`);
            setMovie(response.data || {});
        };
        fetchMovie();
    }, [id]);

    return (
        <div>
            <Header />
            <h1>{movie.Title}</h1>
            <p>Release Date: {movie.Year}</p>
            <p>Rating: {movie.Rated}</p>
            <Footer />
        </div>
    );
};

export default MovieDetails;