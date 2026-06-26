import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../App.css"
import ThemeToggle from '../Components/ThemeToggle';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    function submit() {
        const alphaNumeric = /^[A-Za-z0-9]+$/;

        if(!alphaNumeric.test(password)) {
            alert("Password should be alphanumeric");
            return
        }

        if(email === "hari@gmail.com" && password === "hari123") {
            navigate('/dashboard');
            localStorage.setItem("Email", email);
            localStorage.setItem("password", password);
        } else {
            alert("Invalid username and password")
        }
    }
  return (
    <div className='container'>
        <h2>Email</h2>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <h2>Password</h2>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>    
        <button onClick={submit}>Submit</button>
    </div>
  )
}

export default Login
