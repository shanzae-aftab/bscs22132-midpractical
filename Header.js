//exclude axios and the bonus part. write the code without the bonus again.
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './searchBar';

const Header = () => {
    return (
        <header>
            <h1>Movie Explorer</h1>
            <SearchBar />
            <nav>
                <Link to="/">Home</Link>
                <Link to="/favorites">Favorites</Link>
            </nav>
        </header>
    );
};

export default Header;