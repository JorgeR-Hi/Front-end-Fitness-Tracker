import React from "react";
import { Link } from "react-router-dom";




function Routines({ activities, getRoutines, token, isLoggedIn }) {
  return (
    <>
      {activities &&
        activities.map((activity) => {
          return (
            <div key={activity.id}>
              {activity.creatorId === 1 ? (
                <div>
                  <p>{activity.name}</p>
                  <p>{activity.description}</p>
                  <p>{activity.creatorName}</p>
                  <p>{activity.goal}</p>
                  {/* <Link to={`/update/${activity.id}`}>Update</Link>
                  <Link to={`/edit/${activity.id}`}>Edit</Link> */}
                </div>
              ) : (
                <div>
                  <p>{activity.name}</p>
                  <p>{activity.description}</p>
                  <p>{activity.creatorName}</p>
                  <p>{activity.goal}</p>
                </div>
              )}
            </div>
          );
        })}
    </>
  );
}


export default Routines