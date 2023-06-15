const COHORT_NAME ="2301-ftb-et-web-pt";

const BASE_URL = `https://fitnesstrac-kr.herokuapp.com/api/${COHORT_NAME}`

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
          user: {
            username: user.username,
            password: user.password
          }
        })
      });
      const result = await response.json();
      // As written below you can log your result
      // to check what data came back from the above code.
      console.log(result)
      console.log(user);
      return result
    } catch (err) {
      console.error(err);
    }
  }
//=======Login========
export const login = async () => {
      
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: user.name,
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

//======Token Check=======