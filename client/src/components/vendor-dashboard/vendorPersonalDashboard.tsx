import React, { useEffect, useState } from "react"
import { useAuth } from "../../Context/AuthContext";
import Navbar from "../global/navbar-authorised";
import axios from 'axios';


const VendorPersonalDashboard: React.FC = () => {
    const { user, 
        isLoggedIn, 
        setUser, 
        setIsLoggedIn,
        login,
        logout,
        deleteUser
    } = useAuth();

    interface vendorSpecsInterface{
        id: string,
        name: string,
        email: string,
        phone: string,
        OrganizationName: string,
        mainAddr: string,
        altAddr: string,
        websiteUrl: string,
        about: string
    }

    const [vendorSpecs, setVendorSpecs] = useState<null | vendorSpecsInterface>(null);

    useEffect(() => {
        async function getVendorSpecs(){
            const res = await axios.get(`http://localhost:3001/vendor/${user.id}`);
            const data = await res.data;
            console.log(data)

            setVendorSpecs({
                id: data.id,
                name: data.name,
                phone: data.phone,
                OrganizationName: data.OrganizationName,
                email: data.email,
                websiteUrl: data.websiteUrl,
                about: data.about,
                mainAddr: data.mainAddr,
                altAddr: data.altAddr
            })
        }
        if (user != null) getVendorSpecs();
    }, [user])


    return(
        <>
            <Navbar 
            user={user} 
            deleteUser={deleteUser} 
            list={
                [{
                    name: "Dashboard",
                    url: "/",
                }, {
                    name: 'Product management', 
                    url: "/",
                },{
                    name: 'Received Inquiries',
                    url: "/"
                },{
                    name: 'Review & Ratings',
                    url: "/"
                }] }
            />

            <div className="grid grid-cols-2 mt-[75px]">
                <div>
                    <h2>Organization Details</h2>
                    <p>
                        <strong>Name: </strong>
                        {vendorSpecs?.OrganizationName}
                    </p>
                    <p>
                        <strong>Main Address: </strong>
                        {vendorSpecs?.mainAddr}
                    </p>
                    <p>
                        <strong>Alternative Address: </strong>
                        {vendorSpecs?.altAddr}
                    </p>
                </div>

                <div>
                    <h2>Contact Details</h2>
                    <p>
                        <strong>e-mail address:</strong>
                        {vendorSpecs?.email}
                    </p>
                    <p>
                        <strong>Phone No. :</strong>
                        {vendorSpecs?.phone}
                    </p>
                    <p>
                        <strong>Webiste: </strong>
                        {vendorSpecs?.about}
                    </p>
                </div>

                <div>
                    <h2 className="font-bold text-4xl underline">About :</h2>
                    <p>
                        {vendorSpecs?.about}
                    </p>
                </div>
            </div>
        </>
    )
}

export default VendorPersonalDashboard;