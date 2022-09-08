import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const token = window.localStorage.getItem('token');
    const location = useLocation();

    console.log('location: ', location);
    console.log('token: ', token);  

    if (token === null) {
        return <Navigate to="/home" replace state={{ from: location }}/>;
    } else {
        return children;
    }

};

export default ProtectedRoute;