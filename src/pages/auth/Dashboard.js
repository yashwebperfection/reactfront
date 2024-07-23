// src/pages/auth/Dashboard.js

import React from "react";
import { useNavigate } from 'react-router-dom';

const Dashboard =() =>{
    //Logout process...
    const navigate = useNavigate();
    const handleLogout = ()=> {
        localStorage.removeItem('token');
        navigate('/login');
    }

    //const token = localStorage.getItem('token');
 
        return(
            <div>
                <h2>Dashboard</h2>
                <p>Welcome to my Dashboard...</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
 
}; 
 
export default Dashboard;