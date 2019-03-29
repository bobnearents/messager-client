import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  prettifyDate = (ISOdate) => {
    let date = new Date(ISOdate)
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const dt = date.getDate();
    const time = date.getTime();

    return(month + '/' + dt);
  }
  render() { 
    return (
      <>
        <p className = {this.props.mine}>
          <big>{this.props.text}</big>
          <br />
          <i>
            <small>
              {this.props.user} 
            </small>
          </i>
        </p>
        <br />
      </>
    );
  }
}
 
export default Message;