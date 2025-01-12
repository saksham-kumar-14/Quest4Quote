import React, { useState } from "react";

interface props{
    login: (email: string, pwd: string, type: string) => string
}

const Login:React.FC<props> = ({ login }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('Buyer');

    async function handleLogin(){
        login(email, password, type);
    }

    return(
        <div>
            <h1>Login</h1>

            <div>
                <button onClick={() => setType('buyer')}>Buyer</button>
                <button onClick={() => setType('vendor')}>Vendor</button>
            </div>

            <input onChange={(e) => setEmail(e.target.value)} placeholder="email" />
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"/>
            <button onClick={handleLogin}>Login</button>

            <p>Don't have an account? 
                <span>Register</span>
            </p>
        </div>
    )
}

export default Login;