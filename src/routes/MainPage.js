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
        <Header rooms = {this.props.rooms} changeRoom = {id => this.props.changeRoom(id)}/>
        {this.props.messages}
        <TextInput className="message-box" room_id = {this.props.room_id}/>
      </>
    );
  }
}

export default LoginPage;
