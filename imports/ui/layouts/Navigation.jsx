import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {
  homeButton() {
    return (
      <Link to="/" className="bottom-nav-item flex-item">
        <i className="material-icons">home</i>
      </Link>
    )
  }

  notificationButton() {
    let url = this.props.currentUser ? "/notifications" : "/login";
    return (
      <Link to={url} className="bottom-nav-item flex-item">
        <i className="material-icons">notifications</i>
      </Link>
    )
  }

  userButton() {
    let url = this.props.currentUser ? "/settings" : "/login";
    return (
      <Link to={url} className="bottom-nav-item flex-item">
        <i className="material-icons">person</i>
      </Link>
    )
  }

  render() {
    return (
      <div className="bottom-nav flex-box navbar-fixed-bottom text-center">
        { this.homeButton() }
        <a href="#" className="bottom-nav-item flex-item current"><i className="material-icons">dashboard</i></a>
        <a href="#" className="bottom-nav-item flex-item create-listing"><i className="material-icons md-light">camera_alt</i></a>
        { this.notificationButton() }
        { this.userButton() }
      </div>
    )
  }
}