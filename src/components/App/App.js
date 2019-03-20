import React, { Component } from 'react'
import ApiService from '../../services/api-service'
import Message from '../Message/Message'
import TextInput from '../TextInput/TextInput'
import LoginForm from '../LoginForm/LoginForm'
import SignupForm from '../SignupForm/SignupForm'
import './App.css'

class App extends Component {

  state = {
    messages: []
  }

  postMessage(content) {
    ApiService.postMessage(content);
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
    let messagesHtml;
    if (!!this.state.messages){
      messagesHtml = this.generateMessagesHtml(this.state.messages);
    }
    return (
      <div className="App">
        <SignupForm />
        <LoginForm />
        {messagesHtml}
        <TextInput className = "message-box" setText = {text => this.postMessage(text)}/>
      </div>
    );
  }
}

export default App;
