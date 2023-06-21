

const BASE_URL = `https://fitnesstrac-kr.herokuapp.com/api`

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