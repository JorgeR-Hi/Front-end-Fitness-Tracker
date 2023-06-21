import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import { registerUser } from "./endpoints/user";
import "./style.css"

function Register({setToken}){
    const [username, setUsername] = useState("");
    const [password, setPassword]= useState("");
    const navigate = useNavigate();

    async function handleSubmit(ev) {
        ev.preventDefault();
        const user = { username, password };
      
        if (!password || password.length < 8) {
          alert("Password is too short, it must be at least 8 characters");
          return;
        }
      
        const results = await registerUser(user);
        console.log(results); // Print the results object to the console
      
        if (results && results.token) {
          const token = results.token;
          setToken(token);
          window.localStorage.setItem("token", token);
          navigate("/login");
        } else {
          alert("There was a problem registering");
          console.log("Register has failed");
        }
    }
    function handleHome(){
      navigate("/")
  }
    return (
        <div id="register">
            <h1  className="welcomeMsg">Register Here!</h1>
            <form onSubmit={handleSubmit}>
                <input
                className="setUsername"
                type="text"
                placeholder="Enter Username"
                onChange={(ev) => setUsername(ev.target.value)}
                />
                <input
                className="setPassword"
                type="password"
                placeholder="Enter Password"
                onChange={(ev) => setPassword(ev.target.value)}
                />
                <button className= "createActBtn" type="submit">Create Account</button>
                <button className="accountHomeBtn" onClick={handleHome}>Home</button>
            </form>
        </div>
    )

}

export default Register;
