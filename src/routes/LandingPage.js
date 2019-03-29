import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header/Header';
import screenshot from '../screenshot.png'
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';
import MessageContext from '../context/message-context';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
 
  static contextType = MessageContext;

  handleLoginSuccess = () => {
    this.context.setUser(
      TokenService.getUsername()
    );
  }

  testLogin = () => {
  AuthApiService.postLogin({
    username: 'doctor',
    password: 'password'
  })
    .then(res => {
      TokenService.saveAuthToken(res.authToken);
      this.handleLoginSuccess();
    })}

  render() {
    return (
      <>
        <Header />
        <div className="landing-main">
          <h1>Messager</h1>
          <h3>
            Welcome to messager, a great place to chat with friends,
            organize meetings, get a gaming group together, or simply share
            your ideas with the void
          </h3>
          <p className="message-button message-bubble">
            <Link to="/signup">sign up</Link>
          </p>
          <p className="mine message-button message-bubble">
            <Link to="/login">log in</Link>
          </p>

          <img src={screenshot} alt="screen shot" />
      
          <span>
            click <Link onClick={() => this.testLogin()} to="/">here</Link> to chat anonymously
          </span>
        </div>
      </>
    );
  }
}

export default LoginPage;