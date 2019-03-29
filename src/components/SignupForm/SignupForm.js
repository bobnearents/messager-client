import React, { Component } from "react";
import { Link } from "react-router-dom";
import ApiService from "../../services/api-service";
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import "./SignupForm.css";
import MessageContext from "../../context/message-context";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static contextType = MessageContext;

  onSignupSuccess = (username, password) => {
    AuthApiService.postLogin({
      username: username,
      password: password
    })
      .then(res => {
        TokenService.saveAuthToken(res.authToken);
        this.context.setUser(username)
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    let { full_name, username, password, nickname } = ev.target;
    full_name = full_name.value;
    username = username.value;
    password = password.value;
    nickname = nickname.value;

    ApiService.createUser(
      full_name,
      username,
      password,
      nickname,
      () => this.onSignupSuccess(username, password)
    )
    .catch(res => {
      this.setState({error: res.error})
    })
  };

  render() {
    
    const error = this.state.error;
    return (
      <div className="signup-form">
        <h2 className="form-header">Sign Up!</h2>
        
        <form onSubmit={ev => this.handleSubmit(ev)}>
          {error && <span className = 'error'>{error}</span>}
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" />

          <label htmlFor="password">Password: </label>
          <input type="password" id="password" />

          <label htmlFor="full_name">Full Name: </label>
          <input type="text" id="full_name" />

          <label htmlFor="Nickname">nickname: </label>
          <input type="text" id="nickname" />

          <button type="submit">Submit</button>

          <div>
            Already have an account? <Link to="/login">Log in here</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
