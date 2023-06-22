import React, { useState } from "react";
import { updateRoutine, deleteRoutine } from "./endpoints/routines";
import { useParams } from "react-router";


const UpdateRoutine = ({routines, getRoutines, token, navigate}) => {
  
const {routineId} = useParams();
const [routine] = routines.filter((routine) => routine.id === routineId);



const [name, setName] = useState("");
const [goal, setGoal] = useState("");
const [isPublic, setIsPublic] = useState(false ?? "")

function handleHome(){
  navigate("/")
}
function handleRoutines(){
  navigate("/userRoutines")
}
// async function handleDelete(){
//   try{
//     await deleteRoutine(token, routineId)
//     navigate("/userRoutines")
//   }catch(err){
//     if(err){
//       console.log("This is the error :",err)
//       alert("There was and error deleting your Rouitne")
//     }
//   }
// }
  return (
    <div>
      <h2>Update or delete your Routine</h2>
      <form
        onSubmit={async (ev) => {
          ev.preventDefault();
          if (!name.trim() && !goal.trim()) {
            alert("Please provide a new name or goal for the routine.");
            return;
          }
          try{
          // await updateRoutine(token, 
          //   { 
          //     id: routineId,
          //     name: name, 
          //     goal: goal, 
          //     isPublic: isPublic
          //   });

          getRoutines();
          navigate("/userRoutines")
          }catch(err){
            if(err){
              console.log("This is the error:", err)
              alert("There was an Error when editing your routine")
            }
          }
        }}
      >
        <input
          value={name}
          type="text"
          placeholder="new name of routine"
          onChange={(ev) => {
            setName(ev.target.value);
          }}
        />

        <input
        
        value= {goal}
        type="text"
        placeholder="new goal"
        onChange={(ev)=>{
            setGoal(ev.target.value);
        }}
        />
        <p>Please check if you wish this to be public</p>
            <input
            type="checkbox"
            checked={isPublic}
            onChange={() => setIsPublic(!isPublic)}
            />
        <button type="submit">Submit Changes</button>

      </form>
      <button type="submit" onClick={handleRoutines}>Go Back</button>
      <button type="submit" onClick={handleDelete}>Delete</button>
      <button type="submit" onClick={handleHome}>Home</button>
    </div>
  );
}

export default UpdateRoutine;