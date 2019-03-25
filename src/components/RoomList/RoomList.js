import React, { Component } from 'react';
import MessageContext from '../../context/message-context'
import { Link } from 'react-router-dom'
import './RoomList.css'

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  static contextType = MessageContext;
  generateRoomsHtml = (roomsArray) => {
    return roomsArray.map((room, index) => {
      return <Link onClick = {() => this.context.changeRoom(room.id)} key = {index} to = {`/rooms/${room.id}` } value={room.id}><li>{room.name }</li></Link>
    })
  }

  render() {

    return (
    
      <MessageContext.Consumer>
        {(value) => {
          return (
            <div className="room-list-container">
              <h2>
                Rooms 
                <Link to="/createRoom">+</Link>
              </h2>

              <ul className="room-list">
                {this.generateRoomsHtml(value.rooms)}
              </ul>
              <h2>Direct Messages</h2>
            </div>
          );
        }}
      </MessageContext.Consumer>
    
    );
  }
}

export default MessageList;