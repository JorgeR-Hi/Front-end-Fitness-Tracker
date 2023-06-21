

const BASE_URL = `https://fitnesstrac-kr.herokuapp.com/api`

//========Registering===========
export const registerUser = async (user) => {
    try {
      const response = await fetch(
        `${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: user.username,
            password: user.password
        })
      });
      const result = await response.json();
      console.log("REGISTER RESULT", result);
    
      // As written below you can log your result
      // to check what data came back from the above code.
      //console.log(user);
       return result
    } catch (err) {
      console.error(err);
    }
  }
//=======Login========
export const login = async (user) => {
      
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: user.username,
            password: user.password
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
}

//=========My Data==========
