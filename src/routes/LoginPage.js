import React, { Component } from 'react';
import LoginForm from '../components/LoginForm/LoginForm';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return ( 
      <LoginForm />
     );
  }
}
 
export default LoginPage;
