import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import Login from "../UnAuthLandingPage/login";
import Register from "../UnAuthLandingPage/register";
import Navbar from "../UnAuthLandingPage/navbar";
import Display from "../UnAuthLandingPage/display";
import BuyerDashboard from "../buyer-dashboard/buyer-dashboard";
import VendorPersonalDashboard from "../vendor-dashboard/vendorPersonalDashboard";

const Dashboard: React.FC = () => {
    
    const { user, 
        isLoggedIn, 
        setUser, 
        setIsLoggedIn,
        login,
        logout,
        deleteUser
    } = useAuth();
    const [show, setShow] = useState(""); 

    useEffect(() => {
        if(show == 'login' || show == 'register'){
            document.body.classList.add('no-scroll');
        }else{
            document.body.classList.remove('no-scroll');
        }

        if(user === null) setIsLoggedIn(false)
    }, [show, user]);

    return(
        <div>

            {!isLoggedIn &&
                <div>
                    <Navbar setShow = {setShow} />
                    <Display />
                </div>
            }

            {isLoggedIn && 
                <div>
                    {localStorage.getItem('endPt') == 'buyer' && <BuyerDashboard />}
                    {localStorage.getItem('endPt') == 'vendor' && <VendorPersonalDashboard/>
                    }
                </div>
            }

            {show === "login" && 
            <div className="w-[100vw] h-[100vh] absolute top-0 left-0 bg-[rgba(100,100,100,0.6)] flex items-center justify-center">
                <Login setShow={setShow} login={login} />
            </div>}
            {show === "register" && 
            <div className="w-[100vw] h-[100vh] absolute top-0 left-0 bg-[rgba(100,100,100,0.6)] flex items-center justify-center">
                <Register setShow={setShow} />
            </div>
            }

        </div>
    )
}

export default Dashboard;