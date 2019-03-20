import React, { Component } from 'react'
import ApiService from '../../services/api-service'
import { Route } from "react-router-dom";
import Message from '../Message/Message'

import MainPage from '../../routes/MainPage'

import LoginPage from '../../routes/LoginPage'
import SignupPage from "../../routes/SignupPage";
import './App.css'

class App extends Component {

  state = {
    messages: []
  }

  generateMessagesHtml = messagesArray => {
    return messagesArray.map((message, index) => {
      return <Message text = {message.content} key = {index} user = {message.nickname} date = {message.date_created}/>
    })
  }

  getMessages() {
    ApiService.getMessages()
      .then(res => {
        this.setState({
          messages: res
        })
      })
  }

  componentDidMount() {
    this.timer = setInterval(()=> this.getMessages(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    this.timer = null;
  }

  render() {
    let messagesHtml = 'no messages!';
    if (!!this.state.messages){
      messagesHtml = this.generateMessagesHtml(this.state.messages);
    }
    return (
      <div className="App">
        <Route
          exact path = {'/'}
          render={(props) => <MainPage {...props} messages = {messagesHtml} />}
        />
        <Route 
          path ={'/login'}
          component = {LoginPage}
        />
        <Route
          path={'/signup'}
          component={SignupPage}
        />
        
      </div>
    );
  }
}

export default App;
