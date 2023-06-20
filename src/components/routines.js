import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {fetchAllRoutines} from "./endpoints/routines"


function Routines() {
const [routines, setRoutines] = useState([]);

useEffect(() => {
    async function AllRoutines(){
        const result = await fetchAllRoutines()
        console.log("THIS IS FRONTEND", result)
        setRoutines(result) 
    }
    AllRoutines();
}, [])

return (
    <div>
    <h2>Routines</h2>
    {routines.map((routine) => (
      <div key={routine.id}>
        <h3>{routine.name}</h3>
        <p>{routine.description}</p>
        <p>Creator: {routine.creatorName}</p>
        <p>Goal: {routine.goal}</p>
        {/* Add additional routine details here */}
      </div>
    ))}
  </div>
);
}





export default Routines