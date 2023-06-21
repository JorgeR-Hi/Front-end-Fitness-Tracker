import React, {useState, useEffect} from "react";

import {userRoutines} from "./endpoints/user"


function AllUserRoutines({user, token, navigate}) {
const [routines, setRoutines] = useState([]);
useEffect(() => {
    async function UserRoutines(){
        const result = await userRoutines(user, token)
        console.log(result);
        setRoutines(result)
    }
    UserRoutines();
}, [])
function handleHome(){
    navigate("/")
}
return (
    <div>
      <h2>Routines</h2>
      {Array.isArray(routines) && routines.length > 0 ? (
        routines.map((routine) => (
          <div key={routine.id}>
            <h3>{routine.name}</h3>
            <p>{routine.description}</p>
            {/* <p>Creator: {routine.creatorName}</p> */}
            <p>Goal: {routine.goal}</p>
          </div>
        ))
      ) : (
        <p>No routines found.</p>
      )}

      <button type="submit" onClick={handleHome}>
        Home
      </button>
    </div>
  );
}





export default AllUserRoutines