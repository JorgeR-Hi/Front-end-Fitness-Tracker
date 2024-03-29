import React, {useState, useEffect} from "react";
import {Routes, Route, useNavigate} from"react-router-dom"
import {
    Register, 
    Nav,
    Login,
    Routines,
    Activities,
    CreateActivity,
    CreateRoutine,
    AllUserRoutines
} from "./index"
import {fetchAllActivities} from "./endpoints/activites"
import {fetchAllRoutines} from "./endpoints/routines"
import {myData} from "./endpoints/user"
import UpdateRoutine from "./updateroutine";

function App(){
    const [token, setToken] = useState("")
    const [user, setUser]=useState({})
    const [routines, setRoutines]= useState([])
    const [activities, setActivities]= useState([])
    const [isLoggedIn, setIsLoggedIn]=useState(false)
    
    
    const navigate = useNavigate();
    
    function tokenCheck(){
        if(window.localStorage.getItem("token")){
            setToken(window.localStorage.getItem("token"))
        }
    }
   
    async function getMyData() {
        const results = await myData(token);
        if (results){
          setUser(results);
        }
      }
      
      

    useEffect(() => {
        tokenCheck();
    }, [])
    useEffect(() => {
        if(token){
            getMyData();
            setIsLoggedIn(true);
            setUser(user)
        }
    }, [token])


   return (
    <>
    <h1 className="title">Fitness Tracker</h1>
    <div className ="homeMessageContainer">
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
        isLoggedIn={isLoggedIn} />}
        />
        <Route
        path="/login"
        element={<Login
        setToken={setToken}
        navigate={navigate}
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
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
        navigate={navigate}
        />}
        />
        <Route
        path="/activities"
        element={<Activities
        token={token}
        navigate={navigate}
        />}
        /> 
        <Route
        path="/createActivity"
        element={<CreateActivity 
        token={token}
        
        navigate={navigate}
        isLoggedIn={isLoggedIn}
        />}/>
        <Route
        path="/createRoutine"
        element={<CreateRoutine
        token={token}
        navigate={navigate}
        isLoggedIn={isLoggedIn}
        />}
        />
        <Route
        path="/userRoutines"
        element={<AllUserRoutines
        token={token}
        navigate={navigate}
        isLoggedIn={isLoggedIn}
        user={user}
        />}
        />
        <Route
        path="/userRoutines/updateRoutine/:routineId"
        element={<UpdateRoutine
        token={token}
        navigate={navigate}
        routines={routines}
        />}
        />
    </Routes>
    </>
   )
}

export default App;