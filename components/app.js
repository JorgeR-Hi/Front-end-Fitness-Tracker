import React, {useState, useEffect} from "react";
import {Routes, Route, useNavigate} from"react-router-dom"
import {Register} from "./index"


function App(){
    const [token, setToken]=useState("");
    const [user, setUser]=useState("");
    const navigate = useNavigate()

   return (
    <>
    <div id="Title">
        <h1>Fitness Tracker</h1>
    </div>
    </>
   )
}

export default App;