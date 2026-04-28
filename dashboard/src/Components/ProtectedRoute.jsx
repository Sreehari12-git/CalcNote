import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    if(localStorage.getItem("Email") === null) {
        return <Navigate to="" />
    }

    return <Outlet/>

}

export default ProtectedRoute
