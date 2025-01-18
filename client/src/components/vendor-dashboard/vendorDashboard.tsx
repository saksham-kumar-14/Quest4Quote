import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BuyerChat from "../buyer-dashboard/buyerChat";
import Navbar from "../global/navbar-authorised";

interface Vendor{
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


const VendorDashboard:React.FC = () => {

    const navigate = useNavigate();
    const { user, deleteUser } = useAuth();
    const { id } = useParams<{id : string}>();
    const [vendor, setVendor] = useState<Vendor | null>();
    const [found, setFound] = useState<Boolean>(false);


    useEffect(() => {

        async function operateId(){
            const res = await axios.get(`http://localhost:3001/vendor/${id}`, {
                headers: {
                    "id" : id
                }
            });
            const data = await res.data;
            if(data == null || data.found == 'false') {
                navigate("/")
                setFound(false);
            }else{
                setFound(true);
                setVendor({
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
        }
        operateId();
    }, [user, id]);

    return(
        <div>
            {found &&
            <div>
            {
                <Navbar user={user} deleteUser={deleteUser} list={
                    [{
                        name: "Dashboard",
                        url: "/",
                    }, {
                        name: 'RFQ management', 
                        url: "/",
                    },{
                        name: 'Search Vendors',
                        url: "/"
                    },{
                        name: 'Compare Quotes',
                        url: "/"
                    }]
                }/>
            }
                
                <div className="grid grid-cols-2 mt-[75px]">
                    <div>
                        <h2>Organization Details</h2>
                        <p>
                            <strong>Name: </strong>
                            {vendor.OrganizationName}
                        </p>
                        <p>
                            <strong>Main Address: </strong>
                        </p>
                        <p>
                            <strong>Alternative Address: </strong>
                        </p>
                    </div>

                    <div>
                        <h2>Contact Details</h2>
                        <p>
                            <strong>e-mail address:</strong>
                            {vendor.email}
                        </p>
                        <p>
                            <strong>Phone No. :</strong>
                            {vendor.phone}
                        </p>
                        <p>
                            <strong>Webiste: </strong>

                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div>
                        <h2 className="font-bold text-4xl underline">About :</h2>
                    </div>
                    <BuyerChat />
                </div>
            </div>
            }


        </div>
    )
}

export default VendorDashboard