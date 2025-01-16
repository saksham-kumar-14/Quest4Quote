import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext<AuthContextType | null>(null);

interface User{
    email: string,
    id: string,
    type: string,
}

interface AuthContextType {
    user: User | null;
    isLoggedIn: boolean;
    setUser: (user: User | null) => void;
    setIsLoggedIn: (loggedIn: boolean) => void;
    login : (iden: string, pwd: string) => void;
    logout: () => void;
    deleteUser: (id: string) => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

export function useAuth() {
    return useContext(AuthContext);
}


export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
        async function verifyToken(token: string, endPt: string | null){
            const res = await axios.get(`http://localhost:3001/api/login/${endPt}`, {
                headers: {
                    'token': token
                }
            });
            const data = await res.data;
            if(data.status == 'ok'){
                setIsLoggedIn(true);

                setUser({
                    email: data.email,
                    id: data.id,
                    type: data.type
                });
            }else setIsLoggedIn(false);
        }
        const token = localStorage.getItem('token');
        if(token){
            const endPt = localStorage.getItem('endPt');
            verifyToken(token, endPt);
        }else setIsLoggedIn(false)
    }, [])

    const login = async (email: string, pwd: string, endPt: string) => {

        try{
            const res = await axios.post(`http://localhost:3001/login/${endPt}`, {
                email: email,
                password: pwd
            });
            const data = res.data;

            if(data.token){
                localStorage.setItem('token', data.token);
                localStorage.setItem('endPt', endPt)
                alert(`${endPt} Logged In!`);
            }else{
                alert(`${endPt} not found!`);
            }
        }catch{
            alert(`${endPt} not found!`)
        }
    }

    const deleteUser = async (id: string, endPt: string) => {
        const res = await axios.delete(`http://localhost:3001/user/${id}`);
        const data = await res.data;
        console.log(data);
        
        if(data.status == 'ok') {
            localStorage.removeItem('token');
            alert(`${endPt} is now deleted`);
        }else {
            alert("Error occured");
        }
    }

    const logout = async () => {
        localStorage.removeItem('token');
        alert("You're logged out!")
        window.location.reload();
    }

    const value = {
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        login,
        logout,
        deleteUser
    };

    return(
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}