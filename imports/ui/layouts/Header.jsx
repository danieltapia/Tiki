import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="mobile-nav navbar-fixed-top">
        <div className="nav-inner">
          <div className="nav-left">
            <a href="#" className="nav-brand">Tiki</a>
          </div>
        </div>
      </div>
    )
  }
}