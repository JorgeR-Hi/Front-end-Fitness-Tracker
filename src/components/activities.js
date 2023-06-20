import React, {useState, useEffect} from "react"
import {fetchAllActivities} from "./endpoints/activites"

function Activities({navigate}){
    const [activities, setActivites]= useState([])

    useEffect(() => {
        async function AllActivities(){
            const result = await fetchAllActivities()
            console.log("THIS IS FRONTEND", result)
            setActivites(result) 
        }
        AllActivities();
    }, [])
    function handleHome(){
        navigate("/")
    }
    return (
    <>
        <div id="list-acitivies">
            <h2>Activites</h2>
            {activities.map((activity) => (
                <div key={activity.id}>
                    <h3>{activity.name}</h3>
                    <p>{activity.description}</p>
                </div>
            ))}
        </div>
        <button type="sumbit" onClick={handleHome}>Home</button>
    </>
    );

}

export default Activities; 