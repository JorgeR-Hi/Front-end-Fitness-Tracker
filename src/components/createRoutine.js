import React, { useState } from 'react';
import { makeRoutine } from './endpoints/routines';

function createRoutine({token, navigate}){
    const [name, setName]= useState("")
    const [goal, setGoal]=useState("")
    const [isPublic, setIsPublic]= useState(false)

    function handleHome(){
        navigate("/")
    }
    return (
        <form onSubmit={async (ev) => {
            ev.preventDefault();
            await makeRoutine(token, name, goal, isPublic)
            setName("")
            setGoal("")
            setIsPublic(null)
            navigate("/routines")
        }}>
            <input
            type="text"
            placeholder="Enter the Name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            />
            <input
            type="text"
            placeholder="Enter a Goal"
            value={goal}
            onChange={(ev) => setGoal(ev.target.value)}
            />
            <p>Please check if you wish this to be public</p>
            <input
            type="checkbox"
            checked={isPublic}
            onChange={() => setIsPublic(!isPublic)}
            />
            <button type="submit">Create your Routine</button>
            <button type="submit" onClick={handleHome}>Home</button>
        </form>
    )
}

export default createRoutine;