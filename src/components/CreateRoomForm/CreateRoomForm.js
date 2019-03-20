import React, { Component } from 'react';
import ApiService from "../../services/api-service";

class CreateRoomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleSubmit = ev => {
    ev.preventDefault();
     const { name } = ev.target;

    ApiService.createRoom(
      name.value,
      
    );
    name.value = '';
    this.props.onCreateRoomSuccess();

  }

  render() {
    return (
      <form onSubmit={ev => this.handleSubmit(ev)}>
        <h2>Make a Room!</h2>

        <label htmlFor="name">Room Name: </label>
        <input type="text" id="name" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default CreateRoomForm;