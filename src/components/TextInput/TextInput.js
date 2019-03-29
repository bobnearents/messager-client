import React, { Component } from 'react';
import './TextInput.css';
import ApiService from '../../services/api-service';
import MessageContext from '../../context/message-context'

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static contextType = MessageContext;

  handleSubmit = event => {
    event.preventDefault();
    const { text } = event.target;
    ApiService.postMessage(text.value, this.context.room_id);
    event.target.text.value = "";
  };

  render() {
    return (
      <form className = "message-form" onSubmit={this.handleSubmit}>
        <input type="text" name="text" className="message-input" />
        <button type="submit" className="message-submit-button">
          Enter
        </button>
      </form>
    );
  }
}
 
export default TextInput;