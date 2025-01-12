import React from 'react';
import './search-bar.css';

const SearchBar: React.FC = () => {
    return (
        <form className="search-bar">
            <button type="submit" className="search-button" onClick={(e) => e.preventDefault()}>
                <img src="/src/assets/buyer-dashboard/search.svg" alt="" />
            </button>
            <input type="text" placeholder="Search for products" />
            <button className="cross-button" onClick={(e) => e.preventDefault()}>
                <img src="/src/assets/buyer-dashboard/cross.png" alt="" />
            </button>
        </form>
    );
};

export default SearchBar;