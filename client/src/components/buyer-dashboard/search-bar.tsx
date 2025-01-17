import React, { useState } from 'react';
import { IoClose, IoSearch } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {

    const [input, setInput] = useState("")
    const navigate = useNavigate();

    return (
        <form className="bg-white mx-auto w-fit h-10 rounded-full flex items-center px-4 my-[75px] z-10">
            <button
            type='submit'
            className="w-6 h-6"
            onClick={(e) => {
                e.preventDefault();
                if(input != ""){
                    navigate(`/buyer/search/${input}`)
                }
            }}>
                <IoSearch className='text-2xl' />
            </button>
            <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text" placeholder="Search for products" className="mx-5 outline-none"/>
            <button className="w-6 h-6"
            onClick={(e) => {
                e.preventDefault();
                setInput("")
            }}
            >
            <IoClose className='text-2xl' />
            </button>
        </form>
    );
};

export default SearchBar;