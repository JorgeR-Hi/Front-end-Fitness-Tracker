

const BASE_URL = `https://fitnesstrac-kr.herokuapp.com/api`

const fetchRoutines = async (token) => {
    try {
    const response = await fetch(`${BASE_URL}/routines`, {
      headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
      },
    });
    
    const result = await response.json();
    console.log(result);
    return result
    } catch (err) {
    console.error(err);
    }
    }
    