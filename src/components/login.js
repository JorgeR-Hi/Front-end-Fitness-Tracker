import React, { useState } from 'react';

import {login } from "./endpoints/user"
function Login ({ setToken, navigate, setIsLoggedIn }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   
    
    async function handleSubmit(ev) {
        ev.preventDefault();
        const user = {username, password};
        const results = await login(user);
        
        console.log("this is the frontend!!!!",results);
        console.log("Results", results)

        if (results){
            console.log("Login successful!!!: ", results)
            setToken(results.token);
            window.localStorage.setItem('token', results.token);
            setIsLoggedIn(true);
            console.log('Redirecting to home page...'); 
            navigate("/")
        }else{
            console.log("login not successful")
            alert("Login was not successful sorry try again", results.error)
        }
        if(!password || password.length < 8){
            alert("Password is too short must be at least 8 characters")
            console.log("Password is too short must be at least 8 characters.")
            return;
        }
    }
    function handleHome(){
        navigate("/");
    }
    return (<>
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            placeholder='Enter Username'
            onChange={(ev)=> setUsername (ev.target.value)}
            />
            <input 
            type='password'
            placeholder='Enter Password'
            onChange={(ev)=> setPassword (ev.target.value)}
            />
            <button type='submit'> Login </button>
            <button type="button" onClick={handleHome}>Home</button>

        </form>
        


        </>
    )
}
export default Login;