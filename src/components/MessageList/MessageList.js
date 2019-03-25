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
  
  generateMessagesHtml = (messagesArray, room_id) => {
    return messagesArray.map((message, index) => {
        return (
          <Message
            text={message.content}
            key={index}
            user={message.nickname}
            date={message.date_created}
          />
        );
    });
  };

  render() {
  
    return (
        <MessageContext.Consumer>
          {value => {
            return (
              <div className ='message-list-container'>
                <h2>{value.room_id}</h2>
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