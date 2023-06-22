import React, { useState, useEffect } from "react";
import { userRoutines } from "./endpoints/user";
import { Link } from 'react-router-dom';

function UserRoutines({ token, user, navigate}) {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    async function fetchUserRoutines() {
      try {
        const result = await userRoutines(token, user);
        console.log(result)
        setRoutines(result);
      } catch (error) {
        console.error(error);
      }
    }
    
    fetchUserRoutines();
  }, [user, token]);

console.log(user)

function handleHome(){
  navigate("/")
}
  return (
    <div>
      <h2>All of your Routines</h2>
      
      {Array.isArray(routines) && routines.length > 0 ? (
        routines.map((routine) => (
          <Link to="updateRoutine">
          <div key={routine.id}>
            <h3>{routine.name}</h3>
            <p>{routine.description}</p>
            <p>Creator: {routine.creatorName}</p> 
            <p>Goal: {routine.goal}</p>
            <p>Activites :{routine.activities}</p>
          </div>
        </Link>
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

export default UserRoutines;
