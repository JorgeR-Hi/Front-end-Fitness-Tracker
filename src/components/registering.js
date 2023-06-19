import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import { registerUser } from "./endpoints/user";
import "./style.css"

function Register({setToken}){
    const [username, setUsername] = useState("");
    const [password, setPassword]= useState("");
    const navigate = useNavigate();

    async function handleSubmit(ev){
        ev.preventDefault()
        const user = {username, password}
        
        if(!password || password.length < 8){
            alert("Password is too short must be at least 8 characters")
            console.log("Password is too short must be at least 8 characters.")
            return;
        }
        const results = await registerUser(user)
        const token = results.token;
        setToken(token)
        console.log(results)
        console.log(user)

        if(results && results.success){
            setToken(results.data.token)
            window.localStorage.setItem("token", results.data.token)
            navigate("/routines")
        }
    }
    function handleHome(){
        navigate("/")
    }
    return (
        <div id="register">
            <h1 data-text className="welcomeMsg">Register <span>Here!</span></h1>
            <form onSubmit={handleSubmit}>
                <input
                className="setUsername"
                type="text"
                placeholder="Enter Username"
                onChange={(ev) => setUsername(ev.target.value)}
                />
                <input
                className="setPassword"
                type="text"
                placeholder="Enter Password"
                onChange={(ev) => setPassword(ev.target.value)}
                />
                <button className= "createActBtn" type="submit">Create Account</button>
                <button className="homeBtn" onClick={handleHome}>Home</button>
            </form>
        </div>
    )

}

export default Register;
