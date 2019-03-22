import React, { Component } from 'react';
import MessageContext from '../../context/message-context'
import { Link } from 'react-router-dom'

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  static contextType = MessageContext;
  generateRoomsHtml = (roomsArray) => {
    return roomsArray.map((room, index) => {
      return <Link onClick = {() => this.context.changeRoom(room.id)} key = {index} to = {`/rooms/${room.id}` } value={room.id}> {room.name }</Link>
    })
  }

  render() {

    return (
      <MessageContext.Consumer>
        {(value) => {
          return <>{this.generateRoomsHtml(value.rooms) }</>;
        }}
      </MessageContext.Consumer>
    );
  }
}

export default MessageList;