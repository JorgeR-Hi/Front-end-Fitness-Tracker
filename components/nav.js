import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"

function Nav({ setToken, setIsLoggedIn, isLoggedIn}){
function logout(){
    setToken ('');
    setIsLoggedIn(false);
    window.localStorage.removeItem("token")
}
//need to go over what features we will inculde into the navigation 
return(
    
<nav>
<title className = "NavTitle"> FITNESS TRACKER </title>
{isLoggedIn ? (
    <>
    <button className= "createRoutineBtn">
    <Link to="/createRoutine">Create Routine</Link>

    </button>
    <button className="viewUserRoutineBtn">
        <Link to="/userRoutines">View Your Routines </Link>
    </button>
    </>
    ):(
    <>
    <button className ="loginBtn">
        <Link to="/login"> Login </Link>
    </button>
        <button className ="viewRoutinesBtn">
        <Link to="/routines"> Routines </Link>
        </button>
  </>  

)}
</nav>
);
}

export default Nav;