import React, { Component } from "react";
import "./Header.css";
import MessageContext from "../../context/message-context";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import TokenService from '../../services/token-service';

export default class Header extends Component {
  static contextType = MessageContext;

  renderIcon = () => {
    if(TokenService.hasAuthToken()) {
      if (this.context.isRoomActive) {
      return <FaTimes 
        className="toggle-rooms-bars"
        onClick={() => {
        this.context.toggleActiveRoom() }} 
      />
    }
    return <FaBars 
      className="toggle-rooms-bars"
      onClick={() => {
        this.context.toggleActiveRoom()
      }}
    />}
  }

  render() {
    return (
      <>
        <nav className="Header">
          <span className='logo'><Link to='/'>messager.</Link></span>
          <span className = 'user-greeting'>
          greetings {this.context.user}!</span>
          {this.renderIcon()}
        </nav>
      </>
    );
  }
}
