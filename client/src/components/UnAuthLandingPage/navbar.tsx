import React from "react";

interface props{
    setShow: Function
}

const Navbar: React.FC<props> = ({ setShow }) => {

    return(
        <div className="bg-[#D9D9D9] h-[10vh] w-[100vw] fixed font-medium flex items-center">
            <div className="w-[20%]">
            </div>

            <div className="flex justify-end items-center w-[80%]">

                <a href="#about" className="mx-[5px]">About</a>
                <a href="#contact" className="mx-[20px]">Contact</a>

                <button
                    className="text-black rounded-[10px] bg-[#6AFAA8] hover:text-[#2E3230] px-2 py-[5px] my-[8px] text-lg m-[20px]"
                    onClick={() => setShow('login')}
                >Login</button>
                <button
                    className="text-white rounded-[10px] bg-[#2E3230] hover:bg-black px-2 py-[5px] my-[8px] text-lg mx-[5px]"
                    onClick={() => setShow('register')}
                >Register</button>
            </div>
            
        </div>
    )
}

export default Navbar;