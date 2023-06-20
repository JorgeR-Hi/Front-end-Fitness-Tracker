import React, {useState} from "react";
import {makeActivity} from "./endpoints/activites"

function CreateActivity({token, getActivities, navigate, isLoggedIn}){
    const [name, setName]= useState("")
    const [description, setDescription]=useState("")
    
    async function handleSubmit(ev){
        ev.preventDefault();
        const activity= {name, description}
        console.log(token)
        const result = await makeActivity(activity, isLoggedIn, token)

        
        if(result.success){
            getActivities();
            navigate("/activities");
        }else{
            alert("There was an error making your activity please try again later.")
        }

    }
    function handleHome(){
        navigate("/")
    }
    return (
        <form onSubmit={handleSubmit}>
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