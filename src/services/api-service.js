import config from '../config';
import TokenService from '../services/token-service'
const ApiService = {
  
  getMessages() {
    return fetch(`${config.API_ENDPOINT}/messages`)
      .then(res =>{
        return res.json();
      })
  },

  postMessage(content) {
    return fetch(`${config.API_ENDPOINT}/messages`, {
      method: "POST",
      headers: {
        "authorization": `bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        content: content
      })
    }).then(res => res.json);
  },

  createUser(full_name, username, password, nickname) {
    return fetch(`${config.API_ENDPOINT}/signup`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        full_name,
        username,
        password,
        nickname
      })
    }).then(res => res.json);
  }
}

export default ApiService;