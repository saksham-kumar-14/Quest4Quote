import React, { useState } from "react";
import bcrypt from "bcryptjs-react";
import axios from "axios";

const Register:React.FC = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnfPwd, setCnfPwd] = useState('');
    const [orgName, setOrgName] = useState('');
    const [phone, setPhone] = useState('');
    const [type, setType] = useState('buyer');

    async function email_or_phoneExists(){
        const res = await axios.get(`http://localhost:3001/${type}s`);
        const data = await res.data;

        let ans = false;
        data.map((e: any) => {
            if(e.email == email || e.phoneNumber == phone) ans = true;
        });
        return ans;
    }

    function createUser(){
        const rounds = 10;
        bcrypt.hash(password, rounds)
        .then((hash) => {
            axios.post(`http://localhost:3001/${type}`, {
                name: name,
                email: email,
                password: hash,
                organizationName: orgName,
                phoneNumber: phone
            }).then(() => {
                alert(`${type} Created`);
            }).catch((err: any) => {
                console.error(err);
                alert("Error occured");
            })
        }).catch(() => {
            alert("Some error occured. Please Try again");
        })
    } 

    function phone_valid(){
        for (const c of phone){
            if(c.charCodeAt(0) < 48 || c.charCodeAt(0) > 57){
                return false;
            }
        }
        return true;
    }

    return(
        <div>
            <h1>Register</h1>

            <div>
                <button 
                    onClick={() => setType('buyer')}>
                    Buyer
                </button>
                <button 
                    onClick={() => setType('vendor')}>
                    Vendor
                </button>
            </div>

            <input 
            onChange={(e) => setName(e.target.value)}
            placeholder="name" />
            <input 
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email" />
            <input 
            onChange={(e) => setPassword(e.target.value)}
            type="password" placeholder="password"/>
            <input
                onChange={(e) => setCnfPwd(e.target.value)} 
                type="password" placeholder="confirm password"/>
            <input 
                onChange={(e) => setOrgName(e.target.value)}
                type="text" placeholder="Organization Name" />
            <input 
                onChange={(e) => setPhone(e.target.value)}
                type="text" 
                placeholder="Phone Number" />
            <button
            onClick={async() => {
                if(email.length < 5 || password.length < 4 || orgName.length < 5 || phone.length != 10){
                    alert('Invalid input or Password is too short!');
                    return;
                }
                if(password !== cnfPwd){
                    alert('Passwords do not match!');
                    return;
                }
                if(!phone_valid()) {
                    alert('Invalid Phone number!');
                    return
                }
        
                const userExists = await email_or_phoneExists();
                if(userExists){
                    alert("Email or mobile number already exists. Try to login instead");
                    return;
                }
        
                createUser();
            }}>
                Register
            </button>

            <p>Already registered? 
                <span>Login</span>
            </p>

        </div>
    )
}

export default Register;