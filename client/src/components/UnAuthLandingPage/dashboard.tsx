import React, { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import Login from "./login";
import Register from "./register";

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

    return(
        <div>
            <h1>Dashboard</h1>

            {!isLoggedIn &&
                <div>
                    <button
                        onClick={() => setShow("login")}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setShow("register")}
                    >
                        Register
                    </button>
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

            {show === "login" && <Login login={login} />}
            {show === "register" && <Register />}
            
        </div>
    )
}

export default Dashboard;