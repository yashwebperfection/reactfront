import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute =({ Children }) => {
    const token = localStorage.getItem('token'); 
    if(token){
        return <Navigate to="/dashboard" />;
    }

    return Children;
};

export default PublicRoute;