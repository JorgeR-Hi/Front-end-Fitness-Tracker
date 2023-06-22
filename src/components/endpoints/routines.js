

const BASE_URL = `https://fitnesstrac-kr.herokuapp.com/api`


//=============Gets all Routines=============
export const fetchAllRoutines = async () => {
    try {
    const response = await fetch(`${BASE_URL}/routines`, {
      headers: {
      'Content-Type': 'application/json',
      
      },
    });
    
    const result = await response.json();
    console.log(result);
    return result
    } catch (err) {
    console.error(err);
    }
    }


//================Makes a Routine=============
export const makeRoutine = async (token, name, goal, isPublic) => {
    try {
      const response = await fetch(`${BASE_URL}/routines`, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
          name: name,
          goal: goal,
          isPublic: isPublic
          })
        });
    const result = await response.json();
    console.log(result);
    return result
    } catch (err) {
    console.error(err);
  }
}
//==========Updates a Routine=========
export const updateRoutine = async (token, routine) => {
  try {
    const response = await fetch(`${BASE_URL}/routines/${routine.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        isPublic: routine.isPublic,
        name: routine.name, 
        goal: routine.goal, 
      })
    });
    const result = await response.json();
    console.log(result)
    // console.log(routine);
    // console.log(token)
    return result;
  } catch (err) {
    console.error(err);
  }
};

//============Delete a Routine=================
export const deleteRoutine = async (token, routineId) => {
  try {
    const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
      method: "DELETE",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
      },
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}