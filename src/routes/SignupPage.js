import React, { Component } from 'react';
import SignupForm from '../components/SignupForm/SignupForm';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleSignupSuccess = () => {
    this.props.history.push('/login')
  }

  render() {
    return (
      <SignupForm onSignupSuccess = {this.handleSignupSuccess} />
    );
  }
}

export default SignupPage;
