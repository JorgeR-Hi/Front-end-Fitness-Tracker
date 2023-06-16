import React, { useState } from 'react';

import {login } from "./endpoints/user"
function Login ({ setToken, navigate }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const user = {username, password};

        const results = await login(user);

        if (results.success){
            setToken(results.data.token);
            window.localStorage.setItem('token', results.data.token);
            navigate('/routines');
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
            onChange={(event)=> setUsername (event.target.value)}
            />
            <input 
            type='text'
            placeholder='Enter Password'
            onChange={(event)=> setPassword (event.target.value)}
            />
            <button type='submit'> Submit </button>
            <button type="button" onClick={handleHome}>Home</button>

        </form>
        


        </>
    )
}
export default Login;