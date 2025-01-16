import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import Login from "../UnAuthLandingPage/login";
import Register from "../UnAuthLandingPage/register";
import Navbar from "../UnAuthLandingPage/navbar";
import Display from "../UnAuthLandingPage/display";

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

    async function handleDeletion(){
        await deleteUser();
        window.location.reload();
    }

    function handleLogout(){
        logout();
        window.location.reload();
    }

    useEffect(() => {
        if(show == 'login' || show == 'register'){
            document.body.classList.add('no-scroll');
        }else{
            document.body.classList.remove('no-scroll');
        }
    }, [show]);

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
                    <button onClick={handleDeletion}>
                        Delete Account
                    </button>
                    <button onClick={handleLogout}>
                        Logout
                    </button>
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