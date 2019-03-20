import React, { Component } from 'react'
import ApiService from '../../services/api-service'
import { Route } from "react-router-dom";
import Message from '../Message/Message'

import MainPage from '../../routes/MainPage'
import CreateRoomPage from '../../routes/CreateRoomPage'
import LoginPage from '../../routes/LoginPage'
import SignupPage from "../../routes/SignupPage";
import './App.css'

class App extends Component {
  state = {
    messages: [],
    rooms: [],
    room_id: 1
  };

  changeRoom(id) {
    this.setState({
      room_id: parseInt(id)
    });
  }

  generateMessagesHtml = messagesArray => {
    return messagesArray.map((message, index) => {
      if (message.room_id === this.state.room_id) {
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

  generateRoomsHtml = roomsArray => {
    return roomsArray.map((room, index) => {
      return <option value={room.id}>{room.name}</option>
    })
  }

  getMessages() {
    ApiService.getMessages().then(res => {
      this.setState({
        messages: res
      });
    });
  }

  getRooms() {
    ApiService.getRooms().then(res => {
      this.setState({
        rooms: res
      });
    });
  }

  getRealTimeData() {
    this.getMessages();
    this.getRooms();
  }

  componentDidMount() {
    this.getRealTimeData();
    this.timer = setInterval(() => this.getRealTimeData(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  render() {
    let messagesHtml = "no messages!";
    if (!!this.state.messages) {
      messagesHtml = this.generateMessagesHtml(this.state.messages);
    }
    const roomsHtml = this.generateRoomsHtml(this.state.rooms);
    return (
      <div className="App">
        <Route
          exact
          path={"/"}
          render={props => (
            <MainPage
              {...props}
              messages={messagesHtml}
              rooms={roomsHtml}
              changeRoom={id => this.changeRoom(id)}
              room_id={this.state.room_id}
            />
          )}
        />
        <Route path={"/login"} component={LoginPage} />
        <Route path={"/signup"} component={SignupPage} />
        <Route path={"/createRoom"} component={CreateRoomPage} />
      </div>
    );
  }
}

export default App;
