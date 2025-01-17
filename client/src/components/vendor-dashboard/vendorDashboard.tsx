import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BuyerChat from "../buyer-dashboard/buyerChat";

interface Vendor{
    id: string,
    name: string,
    email: string,
    phone: string,
    OrganizationName: string
}


const VendorDashboard:React.FC = () => {

    const navigate = useNavigate();
    const { user } = useAuth();
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
            if(data == null || data.found == 'false') setFound(false);
            else{
                setFound(true);
                setVendor({
                    id: data.id,
                    name: data.name,
                    phone: data.phone,
                    OrganizationName: data.OrganizationName,
                    email: data.email
                })
            }
        }

        operateId()
    }, [user, id]);

    return(
        <div>
            {vendor != null &&
            <div className="grid grid-cols-2">
                <div>
                    <p>Name: {vendor.name}</p>
                    <p>Email: {vendor.email}</p>
                    <p>Phone: {vendor.phone}</p>
                    <p>Organization Name: {vendor.OrganizationName}</p>
                </div>

                <BuyerChat/>
            </div>
            }


        </div>
    )
}

export default VendorDashboard