import axios from 'axios'

const storage = {
  token: null,
  userInfo: "userInfo",
  userName: "eve.holt@reqres.in",
  password: "cityslicka"
};

if(storage.token)
{
axios.post(`https://reqres.in/api/login`,{ email:storage.userName, password:storage.password })
    .then(response => {
      storage.token=response.data.token   //get token as result of response 200 from reqres.in
      console.log(storage.token)
    })
    .catch(error => {
      console.log(error);
          
    })
  }

class User {
  setToken = token => {
    localStorage.setItem(storage.token, token);
  };
  getDataKey = key => {
    return localStorage.getItem(key);
  };
  setUserInfo = info => {
    localStorage.setItem(storage.userInfo, info);
  };
  isLogin() {
    return localStorage.getItem(storage.token) &&
      localStorage.getItem(storage.userInfo)
      ? true
      : false;
  }

  loginAttempt = (username, password) => {
    if (storage.userName === username && storage.password === password) {
      return true;
    }
    return false;
  };

  clearData() {
    localStorage.removeItem(storage.token);
    localStorage.removeItem(storage.userInfo);
  }
}
export default new User();
