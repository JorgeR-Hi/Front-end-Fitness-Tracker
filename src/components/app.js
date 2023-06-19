import React, {useState, useEffect} from "react";
import {Routes, Route, useNavigate} from"react-router-dom"
import {
    Register, 
    Nav,
    Login,
    Routines
} from "./index"
import {fetchRoutines} from "./endpoints/routines"
import {myData} from "./endpoints/user"

function App(){
    const [token, setToken] = useState("")
    const [user, setUser]=useState({})
    const [isLoggedIn, setIsLoggedIn]=useState(false)
    const [routines, setRoutines]= useState([])
    const [activites, setActivites]=useState("")

    const navigate = useNavigate();
    
    function tokenCheck(){
        if(window.localStorage.getItem("token")){
            setToken(window.localStorage.getItem("token"))
        }
    }
    async function getMyData(){
        const results = await myData(token)
        if(results.success){
            setUser(results.data)
        }
    }
    async function getRoutines(){
        const results =await fetchRoutines(token)
        if(results.success){
            setUser(results.data)
        }
    }

    useEffect(() => {
        tokenCheck();
    }, [])
    useEffect(() => {
        getRoutines();
        if(token){
            getMyData();
            setIsLoggedIn(true);
        }
    }, [token])


   return (
    <>
    <div className ="homeMessageContainer">
        <h1 className="title">Fitness Tracker</h1>
        <h3 className="signup"> Register</h3>
        <h4 className="or"> Or </h4>
        <h3 className="Login "> Login </h3>
    </div>
    
    <Routes>
        <Route
        path="/"
        element={<Nav
        setToken={setToken}
        setIsLoggedIn={setIsLoggedIn}
        isLoggedin={isLoggedIn}/>}
        />
        <Route
        path="/login"
        element={<Login
        setToken={setToken}
        navigate={navigate}
        />}
        />
        <Route
        className="homeRegister"
        path="/register"
        element={<Register
            setToken={setToken}
            navigate={navigate}/>}
        />
        <Route
        path="/routines"
        element={<Routines
        token={token}
        getRoutines={getRoutines}
        isLoggedIn={isLoggedIn}
        />}
        />         
    </Routes>
    </>
   )
}

export default App;