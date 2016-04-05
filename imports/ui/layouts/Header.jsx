import React from 'react';

export default class Header extends React.Component {
  categoryHeader() {
    return (
      <span>
        {this.props.categorySlug} in header.jsx
      </span>
    )
  }

  render() {
    return (
      <div className="mobile-nav navbar-fixed-top">
        <div className="nav-inner">
          <div className="nav-left">
            <a href="/" className="nav-brand">Tiki</a>
            { this.props.categorySlug ? this.categoryHeader() : "" }
          </div>
        </div>
      </div>
    )
  }
}