import config from '../config';
import TokenService from '../services/token-service'
const ApiService = {
  
  getMessages(room_id) {
    return fetch(`${config.API_ENDPOINT}/messages/${room_id}`)
      .then(res =>{
        return res.json();
      })
  },
  
  getRooms() {
    return fetch(`${config.API_ENDPOINT}/rooms`)
      .then(res => {
        return res.json();
      })
  },

  postMessage(content, room_id) {
    return fetch(`${config.API_ENDPOINT}/messages/${room_id}`, {
      method: "POST",
      headers: {
        "authorization": `bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        content: content,
        room_id: room_id,
      })
    }).then(res => res.json);
  },

  createUser(full_name, username, password, nickname, fn) {
    return fetch(`${config.API_ENDPOINT}/signup`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        full_name,
        username,
        password,
        nickname,
      })
    })
    .then(res => {
      if (res.ok) {
        fn()
        return res.json()
      }
      return res.json().then(e => Promise.reject(e))
    })
  },

  createRoom(name) {
    return fetch(`${config.API_ENDPOINT}/rooms`, {
      method: "POST",
      headers: {
        "authorization": `bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name
      })
    }).then(res => res.json);
  }
}

export default ApiService;