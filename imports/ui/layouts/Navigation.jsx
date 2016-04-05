import React from 'react';

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="bottom-nav navbar-fixed-bottom text-center">
        <a href="#" className="bottom-nav-item current"><i className="material-icons">home</i></a>
        <a href="#" className="bottom-nav-item"><i className="material-icons">dashboard</i></a>
        <a href="#" className="bottom-nav-item create-listing"><i className="material-icons md-light">camera_alt</i></a>
        <a href="#" className="bottom-nav-item"><i className="material-icons">notifications</i></a>
        <a href="#" className="bottom-nav-item"><i className="material-icons">person</i></a>
      </div>
    )
  }
}