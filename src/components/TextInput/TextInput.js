import React, { Component } from 'react';
import './TextInput.css';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { text } = event.target;
    this.props.setText(text.value);
    event.target.text.value = "";
  }

  render() { 
    return (
      <form onSubmit = {this.handleSubmit}>
        <input type="text" name = "text" className = 'message-input'/>
        <button type="submit" className= 'message-submit-button'>Enter</button>
      </form>
    );
  }
}
 
export default TextInput;