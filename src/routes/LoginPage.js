import React, { Component } from 'react';
import LoginForm from '../components/LoginForm/LoginForm';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleLoginSuccess = () => {
    this.props.history.push("/");
  }

  render() { 
    return ( 
      <LoginForm onLoginSuccess={this.handleLoginSuccess}/>
     );
  }
}
 
export default LoginPage;
