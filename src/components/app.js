import React, {useState, useEffect} from "react";
import {Routes, Route, useNavigate} from"react-router-dom"
import {Register, Nav} from "./index"
import "./style.css"


function App(){
    const [token, setToken] = useState("")
    const [user, setUser]=useState("")
    const [isLoggedIn, setIsLoggedIn]=useState(false)
    const [routines, setRoutines]= useState("")
    const [activites, setActivites]=useState("")

    const navigate = useNavigate();
    
    function tokenCheck(){
        if(window.localStorage.getItem("token")){
            setToken(window.localStorage.getItem("token"))
        }
    }

    useEffect(() => {
        tokenCheck();
    }, [])
   return (
    <>
    <div>
        <h1 className="title">Fitness Tracker</h1>
    </div>
    
    <Routes>
        {/* <Nav
        setToken={setToken}
        setIsLoggedIn={setIsLoggedIn}
        isLoggedin={isLoggedIn}
        /> */}
        <Route
        path="/register"
        element={<Register
            setToken={setToken}
            navigate={navigate}/>}
        />
        </Routes>
        
        </>
   )
}

export default App;