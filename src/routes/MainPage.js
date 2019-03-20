import React, { Component } from 'react';
import TextInput from '../components/TextInput/TextInput'
import Header from '../components/Header/Header'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <>
        <Header />
        {this.props.messages}
        <TextInput className="message-box" />
      </>
    );
  }
}

export default LoginPage;
