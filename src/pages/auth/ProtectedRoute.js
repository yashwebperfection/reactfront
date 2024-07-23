// frontend/src/components/ProtectedRoute.js
import React, { Children } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ Children }) => {
    const token = localStorage.getItem('token');
    if(!token){
        return <Navigate to="/login" />;
    }
    return Children;    
}

export default ProtectedRoute;