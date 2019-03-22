import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <>
        <Link to = '/login'>Login!</Link>
        <Link to='/signup'>Sign up!</Link>
      </>
    );
  }
}

export default LoginPage;
