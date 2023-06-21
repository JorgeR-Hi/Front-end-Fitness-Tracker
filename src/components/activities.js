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
  
        <div className="activities-container">
            <h2 className= "activities-title"> Activites</h2>
            {activities.map((activity) => (
                <div key={activity.id}>
                    <h3 className="activity-name">{activity.name}</h3>
                    <p className="activity-description">{activity.description}</p>
                </div>
            ))}
        </div>
        <button className="homeBtn" type="sumbit" onClick={handleHome}>Home</button>
    </>
    );

}

export default Activities; 