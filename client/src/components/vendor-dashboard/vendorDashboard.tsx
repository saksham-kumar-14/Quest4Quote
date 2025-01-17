import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

    useEffect(() => {

        async function operateId(){
            const res = await axios.get(`http://localhost:3001/vendor/${id}`, {
                headers: {
                    "id" : id
                }
            });
            const data = await res.data;

            // if(data == null || data.error == "true") navigate('/');
            // else {
            //     alert(data.id + data.name + data.email + data.PhoneNumber + data.OrganizationName)
            //     setVendor({
            //         id: data.id,
            //         name: data.name,
            //         email: data.email,
            //         phone: data.PhoneNumber,
            //         OrganizationName: data.OrganizationName
            //     });
            // }
        }

        if(user != null && user.type != null){
            if(user.type == 'buyer'){

            }else if(user.type == 'vendor'){

            }else navigate("/");
        }else navigate("/");

        operateId()
    }, [user, id]);

    return(
        <div>
            {vendor != null &&
                <div>
                    <p>Name: {vendor.name}</p>
                </div>
            }


        </div>
    )
}

export default VendorDashboard