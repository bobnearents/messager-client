import React, { Component } from 'react';
import TextInput from '../components/TextInput/TextInput'
import Header from '../components/Header/Header'
import MessageList from '../components/MessageList/MessageList'
import MessageContext from '../context/message-context'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  static contextType = MessageContext;

  componentDidMount() {
    this.context.changeRoom(this.props.match.params.id)
  }

  render() {
    const room_id = (this.props.match.params.id)
    return (
      <MessageContext.Consumer>
        {(value) => {
          return(
          <>
            <Header />
            <MessageList />
            <TextInput className="message-box" room_id={room_id} />
          </>
          )
        }}
      </MessageContext.Consumer>
    );
  }
}

export default LoginPage;
