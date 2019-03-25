import React, { Component } from 'react'
import ApiService from '../../services/api-service'
import { Route, Redirect } from "react-router-dom";
import MainPage from '../../routes/MainPage'
import CreateRoomPage from '../../routes/CreateRoomPage'
import LoginPage from '../../routes/LoginPage'
import SignupPage from "../../routes/SignupPage";
import './App.css'
import MessageContext from '../../context/message-context';
import LandingPage from '../../routes/LandingPage'
import TokenService from '../../services/token-service';
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'

class App extends Component {
  state = {
    messages: [],
    rooms: [],
    state: 1,
  };

  static contextType = MessageContext;

  changeRoomState(id) {
    this.setState({
      room_id: parseInt(id)
    });
  }

  getMessages() {
    if (this.state.room_id){
      ApiService.getMessages(this.state.room_id).then(res => {
        this.setState({
          messages: res
        });
      });
    }
  }

  getRooms() {
    ApiService.getRooms().then(res => {
      this.setState({
        rooms: res
      });
    });
  }

  getRealTimeData() {
    if(TokenService.hasAuthToken()){
      this.getMessages();
      this.getRooms();
    }
  }

  componentDidMount() {
    this.getRealTimeData();
    this.timer = setInterval(() => this.getRealTimeData(), 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  render() {
    
    const {room_id, rooms, messages} = this.state;
    const changeRoom = id => {
      return this.changeRoomState(id);
    };
    const value = {
      messages,
      rooms,
      room_id,
      changeRoom
    };

    return (
      <MessageContext.Provider value = {value} >
        <div className="App">

          <Route exact path="/" render={() => (
            TokenService.hasAuthToken() ? (
              <Redirect to="/rooms/1" />
            ) : (
                <LandingPage />
              )
          )} />
          <PrivateRoute path={"/rooms/:id"} component={MainPage} />
          <PublicOnlyRoute path={"/login"} component={LoginPage} />
          <PublicOnlyRoute path={"/signup"} component={SignupPage} />
          <PrivateRoute path={"/createRoom"} component={CreateRoomPage} />
        </div>
      </MessageContext.Provider>
    );
  }
}

export default App;
