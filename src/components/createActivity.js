import React, {useState} from "react";
import {makeActivity} from "./endpoints/activites"

function CreateActivity({token, navigate}){
    const [name, setName]= useState("")
    const [description, setDescription]=useState("")

    function handleHome(){
        navigate("/")
    }
    return (
        <form onSubmit={async (ev) => {
            ev.preventDefault();
            await makeActivity(token, name, description)
            setName("")
            setDescription("")
            navigate("/activities")
        }}>
            <input
            type="text"
            placeholder="Enter the Name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            />
            <input
            type="text"
            placeholder="Enter a description"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
            />
            <button type="submit">Create Activity</button>
            <button type="submit" onClick={handleHome}>Home</button>
        </form>
    )
}

export default CreateActivity;