import React, { useState } from "react";
import { BsEyeFill, BsEyeSlash } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

interface props{
    login: (email: string, pwd: string, type: string) => string
    setShow: Function
}

const Login:React.FC<props> = ({ login, setShow }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('buyer');
    const [pwdType, setPwdType] = useState('password');

    async function handleLogin(){
        await login(email, password, type);
        window.location.reload();
    }

    return(
        <div className="p-3 rounded-md bg-white">
            <div className="flex justify-end items-center">
                <button onClick={() => setShow("")}>
                    <IoClose />
                </button>
            </div>
            <h1 className="font-bold text-2xl my-2">Login</h1>

            <div className="flex items-center justify-start my-4">
                {
                    type == 'buyer'  ? 
                    <>
                        <button className="rounded-[10px] font-semibold text-[#2E3230] bg-[#6AFAA8] py-1 px-3 mx-1" onClick={() => setType('buyer')}>Buyer</button>
                        <button className="rounded-[10px] font-semibold text-white bg-[#2E3230] py-1 px-3 mx-1" onClick={() => setType('vendor')}>Vendor</button>
                    </>
                    :
                    <>
                        <button className="rounded-[10px] font-semibold text-white bg-[#2E3230] py-1 px-3 mx-2" onClick={() => setType('buyer')}>Buyer</button>
                        <button className="rounded-[10px] font-semibold text-[#2E3230] hover:bg-[#27ec7d] bg-[#6AFAA8] py-1 px-3 mx-2" onClick={() => setType('vendor')}>Vendor</button>
                    </>
                }
            </div>

            <div>
                <div className="flex flex-col my-2">
                    <span className="italic text-[#959595]">Email</span>
                    <input 
                    onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                </div>
                <div className="flex flex-col my-2">
                    <span className="italic text-[#959595]">Password</span>

                    <div className="flex items-center justify-center">
                        <input
                        onChange={(e) => setPassword(e.target.value)} type={pwdType} placeholder="password"/>
                        <button
                        onClick={() => {
                            if(pwdType == 'text') setPwdType('password');
                            else setPwdType('text')
                        }}
                        >
                            {
                                pwdType == 'text' ? 
                                <BsEyeFill className="text-3xl"/> :
                                <BsEyeSlash className="text-3xl"/>
                            }
                        </button>
                    </div>
                </div>
                
                <button 
                className="my-4 hover:bg-[#27ec7d] rounded-3xl px-3 py-1 text-[20px] bg-[#6AFAA8]"
                onClick={handleLogin}>
                    Login
                </button>

            </div>

            <p>Don't have an account? 
                <span onClick={() => setShow('register')} className=" mx-2 underline italic text-[#27ec7d] cursor-pointer">Register</span>
            </p>
        </div>
    )
}

export default Login;