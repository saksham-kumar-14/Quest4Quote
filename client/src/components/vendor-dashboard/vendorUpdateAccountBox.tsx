import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import axios from 'axios';
import { IoClose } from "react-icons/io5";

interface props{
    setUpdationBox : Function
}

interface VendorAddInfo{
    websiteUrl: string,
    mainAddr: string,
    altAddr: string
}

const VendorUpdateAccountBox: React.FC<props> = ({setUpdationBox}) => {

    const { user } = useAuth();

    const [vendorAddInfo, setVendorAddInfo] = useState<null | VendorAddInfo>(null);

    const [name, setName] = useState("");
    const [orgName, setOrgName] = useState("");
    const [phone, setPhone] = useState("");
    const [about, setAbout] = useState("");
    const [websiteUrl, setWebsiteUrl] = useState("");
    const [mainAddr, setMainAddr] = useState("");
    const [altAddr, setAltAddr] = useState("");

    useEffect(() => {
        async function getAddVendorInfo(){
            const res = await axios.get(`http://localhost:3001/vendor/${user.id}`);
            const data = await res.data;
            if(data.found == "true"){
                setWebsiteUrl(data.websiteUrl);
                setMainAddr(data.mainAddr);
                setAltAddr(data.altAddr);
            }else{
                alert("vendor not found!")
            }
        }

        if(user){
            setName(user.name);
            setOrgName(user.organizationName);
            setPhone(user.phone);
            setAbout(user.about);
            if(user.id != null) getAddVendorInfo();
        }
    }, user);

    async function updateUser(){
        if(user && user.type == 'vendor'){
            console.log(user);
            const res = await axios.put(`http://localhost:3001/updateVendor/${user.id}`, {
                name: name,
                organizationname: orgName,
                phonenumber: phone,
                about: about,
                mainAddr: mainAddr,
                altAddr: altAddr,
                websiteUrl: websiteUrl
            });
            const data = await res?.data;
            if(data.found == 'false'){
                alert('error occured');
            }else alert("updated");
        }else alert("Error occured")
    }

    async function phoneExists(){
        const res = await axios.get(`http://localhost:3001/vendors`);
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
            <form className="flex flex-col items-center bg-white px-8 py-8 rounded-xl text-black font-medium h-[60vh] overflow-y-scroll">

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
                    <span className="ml-3 italic text-gray-600">Main Address</span>
                    <input
                    onChange={(e) => setMainAddr(e.target.value)}
                    value={mainAddr}
                    placeholder="Main Address"
                    type="text" />   
                </div>

                <div className="flex flex-col my-3">
                    <span className="ml-3 italic text-gray-600">Alternative Address</span>
                    <input
                    onChange={(e) => setAltAddr(e.target.value)}
                    value={altAddr}
                    placeholder="Alternative address"
                    type="text" />   
                </div>

                <div className="flex flex-col my-3">
                    <span className="ml-3 italic text-gray-600">Website URL</span>
                    <input
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    value={websiteUrl}
                    placeholder="Website URL"
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
                        await updateUser();
                        window.location.reload();
                    }
                }}
                type="submit">Submit</button>
            </form>
        </div>
    )
}

export default VendorUpdateAccountBox;