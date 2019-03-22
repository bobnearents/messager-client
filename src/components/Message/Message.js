import React, { Component } from 'react';
import './Message.css';
import { Link } from "react-router-dom";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  render() { 
    return (
      <>
        <p>
          <big><Link to={'/messages/:message_id'}>{this.props.text}</Link></big>
          <br />
          <i>
            <small>
              <Link to={'/user/:user_id'}>{this.props.user}</Link> | {this.props.date}
            </small>
          </i>
        </p>
        <br />
      </>
    );
  }
}
 
export default Message;