import React, {useState, useEffect} from "react";
import {Routes, Route, useNavigate} from"react-router-dom"
import {Register} from "./index"


function App(){
   return (
    <>
    <div id="Title">
        <h1>Fitness Tracker</h1>
    </div>
    
    <Routes>
        <Route
        path="/register"
        element={<Register 
            setToken={setToken}
            navigate={navigator}/>}
        </Routes>
        </>
   )
}

export default App;