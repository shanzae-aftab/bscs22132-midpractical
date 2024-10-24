import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await axios.get('https://www.omdbapi.com/?s=batman&apikey=YOUR_API_KEY');
            setMovies(response.data.Search || []);
        };
        fetchMovies();
    }, []);

    return (
        <div>
            <Header />
            <h1>Popular Movies</h1>
            <MovieList movies={movies} />
            <Footer />
        </div>
    );
};

export default Home;