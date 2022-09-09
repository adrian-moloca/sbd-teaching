import React, { useEffect, useState }  from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./Navigation.css";


const Navigation = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState();

  const onLogout = () => {
    navigate("/");
    setToken();
    return window.localStorage.removeItem('token');
  };

  useEffect(() => {
    setToken(window.localStorage.getItem('token'));
  }, [token])

  return (
    <nav className={"nav-container"}>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/admin">Admin</NavLink>
        <NavLink to="/register">Register</NavLink>
        {token && (<button type='button' onClick={onLogout}>Log Out</button>)}
    </nav>
  )
}

export default Navigation;