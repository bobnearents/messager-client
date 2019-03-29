import React, { Component } from 'react';
import MessageContext from '../../context/message-context'
import { Link } from 'react-router-dom'
import './RoomList.css'
import { FaPlus } from "react-icons/fa";

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static contextType = MessageContext;

  handleLogoutClick = () => {
    window.localStorage.clear();
    this.context.setUser('newcomer')
  };

  generateRoomsHtml = roomsArray => {
    return roomsArray.map((room, index) => {
      return (
        <div key={index} className={room.id == this.context.room_id ? "current-room" : ""}>
          <Link
            onClick={() => this.context.changeRoom(room.id)}
            to={`/rooms/${room.id}`}
            value={room.id}
          >
            {room.name}
          </Link>
        </div>
      );
    });
  };

  render() {
    return (
      <MessageContext.Consumer>
        {value => {
          return (
            <div
              className={
                value.isRoomActive
                  ? "active room-list-container"
                  : "inactive room-list-container"
              }
            >
              <h2>
                Rooms
                <Link to="/createRoom">
                  <FaPlus className="add-room" />
                </Link>
              </h2>

              <div className="room-list">
                {this.generateRoomsHtml(value.rooms)}
              </div>
              
              <Link className="logout" onClick={this.handleLogoutClick} to="/">
                Logout
              </Link>
            </div>
          );
        }}
      </MessageContext.Consumer>
    );
  }
}

export default MessageList;