import React, { useContext } from 'react';
import MovieList from '../components/MovieList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MovieContext } from '../context/MovieContext';

const Favorites = () => {
    const { favorites } = useContext(MovieContext);

    return (
        <div>
            <Header />
            <h1>Favorites</h1>
            <MovieList movies={favorites} />
            <Footer />
        </div>
    );
};

export default Favorites;