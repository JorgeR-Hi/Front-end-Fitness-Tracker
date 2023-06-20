import React, {useState, useEffect} from "react";

import {fetchAllRoutines} from "./endpoints/routines"


function Routines({navigate}) {
const [routines, setRoutines] = useState([]);

useEffect(() => {
    async function AllRoutines(){
        const result = await fetchAllRoutines()
        console.log("THIS IS FRONTEND", result)
        setRoutines(result) 
    }
    AllRoutines();
}, [])
function handleHome(){
    navigate("/")
}
return (
    <div>
    <h2>Routines</h2>
    {routines.map((routine) => (
      <div key={routine.id}>
        <h3>{routine.name}</h3>
        <p>{routine.description}</p>
        <p>Creator: {routine.creatorName}</p>
        <p>Goal: {routine.goal}</p>
      </div>
    ))}
    <button type="sumbit" onClick={handleHome}>Home</button>
  </div>
);
}





export default Routines