const BASE_URL = `https://fitnesstrac-kr.herokuapp.com/api`

export const fetchAllActivities = async () => {
    try {
      const response = await fetch(`${BASE_URL}/activities`, {
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

  export const makeActivity = async (token, name, description) => {
    try {
      const response = await fetch(`${BASE_URL}/activities`, {
        method: "POST",
        headers: {
          'Content-Type' : 'application/json',
          'Authorization' : `Bearer ${ token }`
          
        },
        body: JSON.stringify({
          name: name,
          description: description
        }) 
      });
      
      
      const result = await response.json();
  
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }