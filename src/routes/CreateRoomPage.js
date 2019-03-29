import React, { Component } from 'react';
import Header from '../components/Header/Header'
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
      <>
        <Header />
        <CreateRoomForm onCreateRoomSuccess={this.handleCreateRoomSuccess} />
      </>
    );
  }
}

export default CreateRoomPage;
