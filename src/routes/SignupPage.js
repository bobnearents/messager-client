import React, { Component } from 'react';
import SignupForm from '../components/SignupForm/SignupForm';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <SignupForm />
    );
  }
}

export default SignupPage;
