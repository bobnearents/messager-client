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
        <p>
          <big>{this.props.text}</big>
          <br />
          <i>
            <small>
              {this.props.user} | {this.props.date}
            </small>
          </i>
        </p>
        <br />
      </>
    );
  }
}
 
export default Message;