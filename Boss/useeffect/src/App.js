import "./App.css";
import React, { useEffect, useState } from "react";
import Routing from "./utils/routing/Routing";
import Navigation from "./utils/navigation/Navigation";

// import { BrowserRouter } from "react-router-dom";

const App = () => {
    const token = window.localStorage.getItem('token');
return(
    <>
        <h1>React Routes</h1>
        <Navigation token={token}/>
        <Routing/>
    </>
)
        

};

export default App;
