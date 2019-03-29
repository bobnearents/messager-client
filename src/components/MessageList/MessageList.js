import React, { Component } from 'react';
import MessageContext from '../../context/message-context'
import Message from '../Message/Message'
import './MessageList.css'
import TextInput from '../TextInput/TextInput'

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  static contextType = MessageContext;

  getRoomName = (id) => {
    let name = '';
    this.context.rooms.forEach(room => {
      if (room.id === parseInt(id)) {
        name = room.name
      }
    })
    return name;
  }
  
  generateMessagesHtml = (messagesArray, room_id) => {
    return messagesArray.map((message, index) => {
        return (
          <Message
            text={message.content}
            key={index}
            user={message.nickname}
            date={message.date_created}
            mine = {(message.username === this.context.user) ? 'mine' : ''}
          />
        );
    });
  };

  render() {
  
    return (
        <MessageContext.Consumer>
          {value => {
            return (
              <div className={(value.isRoomActive) ? 'shared message-list-container' : 'full message-list-container'}>
                <button
                  className={(value.isRoomActive) ? 'toggle-rooms on' : 'toggle-rooms off'} 
                  onClick = {() => {value.toggleActiveRoom()}}>
                  {(value.isRoomActive) ? 'Close' : 'View Rooms'}
                </button>
                <h2 className = 'test'>{(this.getRoomName(value.room_id))}</h2>
                <ul className="message-list">
                  {this.generateMessagesHtml(value.messages, value.room_id)}
                </ul>
                <TextInput />
              </div>
            );
          }}
        </MessageContext.Consumer>
    );
  }
}
 
export default MessageList;
