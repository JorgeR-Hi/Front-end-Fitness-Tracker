import React, { useState } from "react";
import { updateRoutine } from "./endpoints/routines";
import { useParams } from "react-router";


const UpdateRoutine = ({routines, getRoutines, token, navigate}) => {
  
const {routineId} = useParams();
const [routine] = routines.filter((routine) => routine.id === routineId)

const {name, goal} = routine ? routine : {};
const [updatedName, setName] = useState(name);
const [updatedGoal, setGoal] = useState(goal);

function handleHome(){
  navigate("/")
}
function handleDelete(){
  try{
    
  }catch(err){
    if(err){
      alert("There was and error deleting your Rouitne")
    }
  }
}
  return (
    <div>
      <h2>Update or delete your Routine</h2>
      <form
        onSubmit={async (ev) => {
          ev.preventDefault();
          await updateRoutine(token, routine);
          getRoutines();
          navigate("/userRoutines")
        }}
      >
        <input
          variant="standard"
          value={name}
          type="text"
          placeholder="new name of routine"
          onChange={(ev) => {
            setName(ev.target.value);
          }}
        />

        <input
        vairant= "standard"
        value= {goal}
        type="text"
        placeholder="new goal"
        onChange={(ev)=>{
            setGoal(ev.target.value);
        }}
        />
        <button type="submit">Submit Changes</button>

      </form>
      <button type="submit" onClick={handleDelete}>Delete</button>
      <button type="submit" onClick={handleHome}>Home</button>
    </div>
  );
}

export default UpdateRoutine;