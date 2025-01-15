import React, { useState } from "react";
import bcrypt from "bcryptjs-react";
import axios from "axios";
import { IoClose } from "react-icons/io5";
import { BsEyeFill, BsEyeSlash } from "react-icons/bs";

interface props{
    setShow: Function
}

const Register:React.FC<props> = ({ setShow }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnfPwd, setCnfPwd] = useState('');
    const [orgName, setOrgName] = useState('');
    const [phone, setPhone] = useState('');
    const [type, setType] = useState('buyer');
    const [pwdType, setPwdType] = useState("password");
    const [cnfPwdType, setCnfPwdType] = useState("password");

    async function email_or_phoneExists(){
        const res = await axios.get(`http://localhost:3001/${type}s`);
        const data = await res.data;
        if(data == null) return false;
        let ans = false;
        data.map((e: any) => {
            if(e.email == email || e.phoneNumber == phone) ans = true;
        });
        return ans;
    }

    function createUser(){
        const rounds = 10;
        bcrypt.hash(password, rounds)
        .then((hash) => {
            axios.post(`http://localhost:3001/${type}`, {
                name: name,
                email: email,
                password: hash,
                organizationName: orgName,
                phoneNumber: phone
            }).then(() => {
                alert(`${type} Created`);
            }).catch((err: any) => {
                console.error(err);
                alert("Error occured");
            })
        }).catch(() => {
            alert("Some error occured. Please Try again");
        })
    } 

    function phone_valid(){
        for (const c of phone){
            if(c.charCodeAt(0) < 48 || c.charCodeAt(0) > 57){
                return false;
            }
        }
        return true;
    }

    return(
        <div className="p-3 rounded-md bg-white overflow-y-auto h-[80vh] overflow-scroll">
            <div className="flex justify-end items-center">
                <button onClick={() => setShow("")}>
                    <IoClose/>
                </button>
            </div>

            <h1 className="font-bold text-2xl my-2">Register</h1>

            <div className="flex items-center justify-start my-4">
                {
                    type == 'buyer'  ? 
                    <>
                        <button className="rounded-[10px] font-semibold text-[#2E3230] bg-[#6AFAA8] py-1 px-3 mx-2" onClick={() => setType('buyer')}>Buyer</button>
                        <button className="rounded-[10px] font-semibold text-white bg-[#2E3230] py-1 px-3 mx-2" onClick={() => setType('vendor')}>Vendor</button>
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
                    <span className="italic text-[#959595]">Name</span>
                    <input 
                    onChange={(e) => setName(e.target.value)} placeholder="name" />
                </div>
                <div className="flex flex-col my-2">
                    <span className="italic text-[#959595]">Email</span>
                    <input 
                    onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                </div>
                <div className="flex flex-col my-2">
                    <span className="italic text-[rgb(149,149,149)]">Password</span>

                    <div className="flex items-center justify-center">
                        <input 
                        onChange={(e) => setPassword(e.target.value)}
                        type={pwdType}
                        placeholder="password" />
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
                <div className="flex flex-col my-2">
                    <span
                    className="italic text-[#959595]">Confirm Password</span>

                    <div className="flex items-center justify-center">
                        <input
                        type={cnfPwdType} 
                        onChange={(e) => setCnfPwd(e.target.value)} placeholder="Confirm password" 
                        />
                        <button
                        onClick={() => {
                            if(cnfPwdType == 'text')setCnfPwdType('password');
                            else setCnfPwdType('text')
                        }}
                        >
                            {
                                cnfPwdType == 'text' ? 
                                <BsEyeFill className="text-3xl"/> :
                                <BsEyeSlash
                                className="text-3xl"/>
                            }
                        </button>
                    </div>
                    
                </div>

                <div className="flex flex-col my-2">
                    <span className="italic text-[#959595]">Organization Name</span>
                    <input 
                    onChange={(e) => setOrgName(e.target.value)} placeholder="Organization Name" />
                </div>

                <div className="flex flex-col my-2">
                    <span className="italic text-[#959595]">Phone Number</span>
                    <input 
                    onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" />
                </div>
            
            </div>

            <button
            className="my-4 hover:bg-[#27ec7d] rounded-3xl px-3 py-1 text-[20px] bg-[#6AFAA8]"
            onClick={async() => {
                if(email.length < 5 || password.length < 4 || orgName.length < 2 || phone.length != 10){
                    alert('Invalid input or Password is too short!');
                    return;
                }
                if(password !== cnfPwd){
                    alert('Passwords do not match!');
                    return;
                }
                if(!phone_valid()) {
                    alert('Invalid Phone number!');
                    return
                }
        
                const userExists = await email_or_phoneExists();
                if(userExists){
                    alert("Email or mobile number already exists. Try to login instead");
                    return;
                }
        
                createUser();
            }}>
                Register
            </button>

            <p>Already registered? 
                <span onClick={() => setShow('login')} className=" mx-2 underline italic text-[#27ec7d] cursor-pointer">Login</span>
            </p>

        </div>
    )
}

export default Register;