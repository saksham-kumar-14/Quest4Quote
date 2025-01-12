import React from 'react';
import './search-bar.css';

const SearchBar: React.FC = () => {
    return (
        <form className="bg-white mx-auto w-fit h-10 rounded-full flex items-center px-4 my-52">
            <button type="submit" className="w-6 h-6" onClick={(e) => e.preventDefault()}>
                <img src="/src/assets/buyer-dashboard/search.svg" alt=""/>
            </button>
            <input type="text" placeholder="Search for products" className="mx-5"/>
            <button className="w-6 h-6" onClick={(e) => e.preventDefault()}>
                <img src="/src/assets/buyer-dashboard/cross.png" alt="" />
            </button>
        </form>
    );
};

export default SearchBar;