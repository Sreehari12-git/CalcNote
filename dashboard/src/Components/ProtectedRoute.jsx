import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Login from '../Pages/Login';

const ProtectedRoute = () => {
    if(localStorage.getItem("Email") === null) {
        return <Navigate to="" />
    }

    return <Outlet/>
}

export const LoginRoute = () => {
    const isAuthenticated = localStorage.getItem("Email");
    return isAuthenticated? <Navigate to="/dashboard" replace/> : <Login/>
}

export default ProtectedRoute
