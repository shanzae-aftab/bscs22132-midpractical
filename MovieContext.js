import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [theme, setTheme] = useState('light');

    const addFavorite = (movie) => {
        setFavorites((prev) => [...prev, movie]);
    };

    const removeFavorite = (id) => {
        setFavorites((prev) => prev.filter(movie => movie.id !== id));
    };

    return (
        <MovieContext.Provider value={{ favorites, addFavorite, removeFavorite, theme, setTheme }}>
            {children}
        </MovieContext.Provider>
    );
};