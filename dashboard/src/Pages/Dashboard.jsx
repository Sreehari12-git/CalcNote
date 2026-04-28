import React from 'react'
import {Link, useNavigate, Outlet} from "react-router-dom"
import '../Dashboard.css'
function Dashboard() {
    const email = localStorage.getItem("Email");
    const navigate = useNavigate();
    function logout() {
        localStorage.removeItem("Email");
        localStorage.removeItem("password");
        navigate("/");
    }
   return (
        <div className="dashboard">
            <div className="navbar">
                <h1>Welcome {email}</h1>

                <div className="nav-links">
                    <Link to="home">Home</Link>
                    <Link to="functionalities">Functionalities</Link>
                    <Link to="about">About</Link>
                </div>

                <button className="logout-btn" onClick={logout}>
                    Logout
                </button>
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard
