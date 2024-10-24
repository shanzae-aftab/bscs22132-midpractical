import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const { setTheme } = useContext(MovieContext);

    const handleSearch = (e) => {
        e.preventDefault();
        if (query) {
            navigate(`/search/${query}`);
        }
    };

    return (
        <form onSubmit={handleSearch}>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search for movies..." 
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;