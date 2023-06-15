const COHORT_NAME ="2301-ftb-et-web-pt";

const BASE_URL = `https://fitnesstrac-kr.herokuapp.com/${COHORT_NAME}`

const fetchRoutines = async () => {
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
    