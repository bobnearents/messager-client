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
      <div className="signup-form">
        <h2 className="form-header">Make a Room!</h2>
        <form onSubmit={ev => this.handleSubmit(ev)}>

          <label htmlFor="name">Room Name: </label>
          <input type="text" id="name" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateRoomForm;