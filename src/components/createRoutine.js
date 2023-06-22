import React, { useState } from 'react';
import { makeRoutine } from './endpoints/routines';
import "./style.css"
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
            className="createRoutineName"
            type="text"
            placeholder="Enter the Name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            />
            <input
            className="enterGoal"
            type="text"
            placeholder="Enter a Goal"
            value={goal}
            onChange={(ev) => setGoal(ev.target.value)}
            />
            <p className="publicyn">Please check if you wish this to be public</p>
            <input
            className='checkbox'
            type="checkbox"
            checked={isPublic}
            onChange={() => setIsPublic(!isPublic)}
            />
            <button className='createRoutineBtn' type="submit">Create your Routine</button>
            <button className="routineHome"type="submit" onClick={handleHome}>Home</button>
        </form>
    )
}

export default createRoutine;