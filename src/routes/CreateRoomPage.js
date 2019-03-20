import React, { Component } from 'react';
import CreateRoomForm from '../components/CreateRoomForm/CreateRoomForm';

class CreateRoomPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleCreateRoomSuccess = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <CreateRoomForm onCreateRoomSuccess={this.handleCreateRoomSuccess} />
    );
  }
}

export default CreateRoomPage;
