import React, { Component } from "react";
import Header from "../components/Header/Header";
import MessageList from "../components/MessageList/MessageList";
import MessageContext from "../context/message-context";
import RoomList from "../components/RoomList/RoomList";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static contextType = MessageContext;

  componentDidMount() {
    this.context.changeRoom(this.props.match.params.id);
  }

  render() {
    if (this.context.loading) {
      return (
          <div className="lds-circle">
            <div />
          </div>
      );
    } else {
      return (
        <>
          <Header />
          <RoomList />
          <MessageList />
        </>
      );
    }
  }
}

export default LoginPage;
