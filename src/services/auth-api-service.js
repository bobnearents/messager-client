import config from "../config";

const AuthApiService = {
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(credentials)
    }).then(res => {
      if (!res.ok) {
        return res.json().then(e => Promise.reject(e))
      }
      else {
        return res.json()
      }
    });
  }
};

export default AuthApiService;


