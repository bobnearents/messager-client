import React, { Component } from 'react';
import SignupForm from '../components/SignupForm/SignupForm';
import Header from '../components/Header/Header'

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <>
        <Header />
        <SignupForm />
      </>
    );
  }
}

export default SignupPage;
