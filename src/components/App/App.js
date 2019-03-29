import React, { Component } from 'react'
import './App.css'
import 'normalize.css'
import ApiService from '../../services/api-service'
import { Route, Redirect } from "react-router-dom";
import MainPage from '../../routes/MainPage'
import CreateRoomPage from '../../routes/CreateRoomPage'
import LoginPage from '../../routes/LoginPage'
import SignupPage from "../../routes/SignupPage";
import MessageContext from '../../context/message-context';
import LandingPage from '../../routes/LandingPage'
import TokenService from '../../services/token-service';
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'

//gather, groovy, q, rooms, blarf, adaptchat, ...

class App extends Component {
  state = {
    messages: [],
    rooms: [],
    state: 1,
    user: 'newcomer',
    isRoomActive: true,
    loading:false,
    loadingTrue: () => {
      this.setState({ loading: true })
    },
    loadingFalse: () => {
      this.setState({ loading: false })
    },
  };

  static contextType = MessageContext;

  changeRoomState(id) {
    this.setState({
      room_id: parseInt(id)
    });
  }
  
  setUser(username) {
    this.setState({
      user:username
    });
  }

  toggleActiveRoom() {
    let roomStatus = this.state.isRoomActive;
    this.setState({
      isRoomActive: !roomStatus
    })
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
    if (TokenService.hasAuthToken()){
      this.setUser(
        TokenService.getUsername()
      );
    }
    this.getRealTimeData();
    this.timer = setInterval(() => this.getRealTimeData(), 500);

  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  render() {
    
    const {room_id, rooms, messages, user, isRoomActive, loading, loadingFalse, loadingTrue} = this.state;
    const changeRoom = id => {
      return this.changeRoomState(id);
    };
    const setUser = username => {
      return this.setUser(username);
    };
    const toggleActiveRoom = () => {
      return this.toggleActiveRoom()
    }
    const value = {
      messages,
      rooms,
      room_id,
      changeRoom,
      setUser,
      user,
      isRoomActive,
      toggleActiveRoom,
      loading,
      loadingFalse,
      loadingTrue
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
