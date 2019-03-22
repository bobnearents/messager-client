import React, { Component } from 'react';
import MessageContext from '../../context/message-context'
import Message from '../Message/Message'

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  
  generateMessagesHtml = (messagesArray, room_id) => {
    return messagesArray.map((message, index) => {
      if (message.room_id === room_id) {
        return (
          <Message
            text={message.content}
            key={index}
            user={message.nickname}
            date={message.date_created}
          />
        );
      }
    });
  };

  render() {
     
    return (  
      <MessageContext.Consumer>
        {(value) => {
          return <>{(this.generateMessagesHtml(value.messages, value.room_id))}</>;
        }}
      </MessageContext.Consumer>
    );
  }
}
 
export default MessageList;