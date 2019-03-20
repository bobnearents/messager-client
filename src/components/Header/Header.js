import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";


export default class Header extends Component {
  handleLogoutClick = () => {window.localStorage.clear()};

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }

  render() {
    return (
      <>
        <nav className="Header">
          <select onChange = {ev => this.props.changeRoom(ev.target.value)}>
            {this.props.rooms}
          </select>
          {TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderLoginLink()}
          <Link to="/createRoom">Make a new room!</Link>
        </nav>
      </>
    );
  }
}