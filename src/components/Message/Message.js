import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  render() { 
    return (
      <>
        <p className = {`message-bubble ${this.props.mine}`}>
          <span className='message-text'> {this.props.text}</span>
          <span className='message-user'> {this.props.user} </span>
        </p>
        <br />
      </>
    );
  }
}
 
export default Message;