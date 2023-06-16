import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import { registerUser } from "./endpoints/user";

function Register({setToken}){
    const [username, setUsername] = useState("");
    const [password, setPassword]= useState("");
    const navigate = useNavigate();

    async function handleSubmit(ev){
        ev.preventDefault()
        const user = {username, password}

        const results = await registerUser(user)
        const token = results.token;
        if(!password || password.length < 8){
            console.log("Password is too short must be at least 8 characters.")
            return;
        }
        setToken(token)
        console.log(results)
        console.log(user)

        if(results.sucess){
            setToken(results.data.token)
            window.localStorage.setItem("token", results.data.token)
            //navigate("/")
        }
    }

    return (
        <div id="register">
            <h1>register</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Enter Username"
                onChange={(ev) => setUsername(ev.target.value)}
                />
                <input
                type="text"
                placeholder="Enter Password"
                onChange={(ev) => setPassword(ev.target.value)}
                />
                <button type="submit">Create Account</button>

            </form>
        </div>
    )

}

export default Register;
