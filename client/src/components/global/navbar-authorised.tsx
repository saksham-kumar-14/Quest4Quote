import React from 'react';
import AccountDropdown from './navbar-dropdown';

interface props{
    list: string[]
}

const Navbar: React.FC<props> = ({list}) => {
    return (
        <nav className="bg-[#090D11] p-3 text-white text-lg font-bold z-2 fixed top-0 left-0 w-full">
            <div className="flex items-center">
            <div className="w-10 h-10 flex items-center justify-center cursor-pointer" onClick={() => window.location.href = '/dashboard'}>
                <img src="/src/assets/navbar-authorised/logo.svg" alt="Logo" className="w-8 h-8" />
            </div>
            <div className="flex-1 flex">
                {list.map((e) => {
                    return <a href="#" className="flex-1 text-center bg-[#090D11] text-[#6AFAA8] hover:text-white  font-[400]">{e}</a>
                })}
            </div>
            <AccountDropdown />
            </div>
        </nav>
    );
};

export default Navbar;