import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import axios from 'axios';
import { IoClose } from "react-icons/io5";

interface props{
    setUpdationBox : Function
}

const BuyerUpdateAccount: React.FC<props> = ({setUpdationBox}) => {

    const { user } = useAuth();

    const [name, setName] = useState("");
    const [orgName, setOrgName] = useState("");
    const [phone, setPhone] = useState("");
    const [about, setAbout] = useState("");

    useEffect(() => {
        if(user){
            setName(user.name);
            setOrgName(user.organizationName);
            setPhone(user.phone);
            setAbout(user.about)
        }
    }, user);

    async function updateUser(){
        if(user && user.type == 'buyer'){
            const res = await axios.put(`http://localhost:3001/updateBuyer/${user.id}`, {
                name: name,
                organizationname: orgName,
                phonenumber: phone,
                about: about
            });
            const data = await res?.data;
            if(data.found == 'false'){
                alert('error occured');
            }else alert('updated!');
        }else alert("Error occured!")
        
    }

    async function phoneExists(){
        const res = await axios.get(`http://localhost:3001/buyers`);
        const data = await res.data;
        if(data == null) return false;
        let ans = false;
        data.map((e: any) => {
            if(e.phoneNumber == phone) ans = true;
        });
        return ans;
    }

    function validPhone(){
        if(phone.length != 10) return false;
        for(const char of phone){
            if(char.charCodeAt(0) < 48 || char.charCodeAt(0) > 57) {
                return false;
            }
        }
        return true;
    }

    return(
        <div className="absolute top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(100,100,100,0.6)] flex items-center justify-center z-10">
            <form className="flex flex-col items-center bg-white px-8 py-8 rounded-xl text-black font-medium">

                <div className="flex justify-end items-end content-end">
                    <IoClose onClick={() => {
                        setUpdationBox("")
                    }} className="text-2xl cursor-pointer" />
                </div>

                <h2 className="text-4xl font-semibold">Update Details</h2>

                <div className="flex flex-col my-3">
                    <span className="ml-3 italic text-gray-600">Name</span>
                    <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="name"
                    type="text" />   
                </div>

                <div className="flex flex-col my-3">
                    <span className="ml-3 italic text-gray-600">Organization Name</span>
                    <input
                    onChange={(e) => setOrgName(e.target.value)}
                    value={orgName}
                    placeholder="Organization Name"
                    type="text" />   
                </div>

                <div className="flex flex-col my-3">
                    <span className="ml-3 italic text-gray-600">Phone</span>
                    <input
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    placeholder="phone"
                    type="text" />   
                </div>

                <div className="flex flex-col my-3">
                    <span className="ml-3 italic text-gray-600">About</span>
                    <textarea 
                    onChange={(e) => setAbout(e.target.value)}
                    value={about}
                    placeholder="About"
                    ></textarea> 
                </div>
                
                <button
                className="rounded-[10px] font-semibold text-[#2E3230] bg-[#6AFAA8] py-1 px-3 mx-1"
                onClick={async (e) => {
                    e.preventDefault();

                    if(phone != user.phone && await phoneExists()) {
                        alert("Phone Number already exists");

                    }else if(!validPhone()){
                        alert("Phone Number is not valid");
                    }
                    else{
                        alert("Updated")
                        await updateUser();
                        window.location.reload();
                    }
                }}
                type="submit">Submit</button>
            </form>
        </div>
    )
}

export default BuyerUpdateAccount;