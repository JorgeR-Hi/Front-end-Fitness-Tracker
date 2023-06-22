import React from 'react';
import { Link } from 'react-router-dom';


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
    <button>
        <Link to="/createActivity">Create Activity</Link>
    </button>
    <button className="viewUserRoutineBtn">
        <Link to="/userRoutines">Your Routines</Link>
    </button>
    <button className ="viewRoutinesBtn">
        <Link to="/routines"> View All Routines </Link>
    </button>
    <button>
        <Link to="/activities">View All Activites</Link>
    </button>
    <button>
        <Link onClick={logout}>Log Out</Link>
    </button>
    </>
    ):(
    <>
    <button className ="registerBtn">
        <Link to="/register">Register</Link>
    </button>
    <button className ="loginBtn">
        <Link to="/login"> Login </Link>
    </button>
        <button className ="viewRoutinesBtn">
        <Link to="/routines"> Routines </Link>
    </button>
    <button>
        <Link to="/activities">Activites</Link>
    </button>
  </>  

)}
</nav>
);
}

export default Nav;