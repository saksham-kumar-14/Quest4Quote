import React from 'react';

const SearchBar: React.FC = () => {
    return (
        <form className="bg-white mx-auto w-fit h-10 rounded-full flex items-center px-4 my-[75px] z-10">
            <button type="submit" className="w-6 h-6" onClick={(e) => e.preventDefault()}>
            <img src="/src/assets/buyer-dashboard/search.svg" alt=""/>
            </button>
            <input type="text" placeholder="Search for products" className="mx-5 outline-none"/>
            <button className="w-6 h-6" onClick={(e) => e.preventDefault()}>
            <img src="/src/assets/buyer-dashboard/cross.png" alt="" />
            </button>
        </form>
    );
};

export default SearchBar;