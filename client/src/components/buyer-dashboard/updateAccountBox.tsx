import React, { useState } from "react";
import axios from 'axios';

interface User{
    name: string,
    phone: string,
    organizationName: string,
    id: string
}

interface props{
    user: User 
}

const buyerUpdateAccountBox:React.FC <props> = ({ user }) => {

    async function updateDetails(){
        const res = await axios.put(`http://localhost:3001/updateBuyer/${user.id}`, {
            name: name,
            phonenumber: phone,
            organizationname: organizationName
        });
        const data = await res.data;
        if(data.found == 'false'){
            alert('Record not found');
        }
        else if(!data.matchedCount || !data.modifiedCount) alert('Record Not found');
        else{
            alert("Updated!")
        }
    }


    const [name, setName] = useState(user.name);
    const [phone, setPhone] = useState(user.phone);
    const [organizationName, setOrganizationName] = useState(user.organizationName);

    return(
        <div>
            <form>
                <input 
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text" 
                placeholder="Name" />
                <input 
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                type="text"
                placeholder="Phone" />
                <input 
                onChange={(e) => setOrganizationName(e.target.value)}
                value={organizationName}
                type="text"
                placeholder="organizationName"/>
                <button
                onClick={(e) => {
                    e.preventDefault();
                    updateDetails();
                }}
                type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
        
    )
}

export default buyerUpdateAccountBox;