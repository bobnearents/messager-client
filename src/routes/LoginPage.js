import React, { Component } from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import MessageContext from '../context/message-context';
import Header from '../components/Header/Header'
import TokenService from '../services/token-service';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  static contextType = MessageContext;

  handleLoginSuccess = () => {
    this.props.history.push("/");
    this.context.setUser(
      TokenService.getUsername()
    );
  }

  render() { 
    return ( 
      <>
        <Header />
        <LoginForm onLoginSuccess={this.handleLoginSuccess}/>
      </>
     );
  }
}
 
export default LoginPage;
