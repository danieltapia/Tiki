import React from 'react';

export default class Header extends React.Component {
  categoryHeader() {
    return (
      <div className="blue-nav nav-inner flex-box">
        <div className="nav-left">
          <a href="#" className="nav-icon"><i className="material-icons md-light">arrow_back</i></a>
        </div>

        <div className="nav-middle flex-item">
          <div className="middle-text">{this.props.categorySlug}</div>
        </div>

        <div className="nav-right">
          <a href="#" className="nav-icon"><i className="material-icons md-light">search</i></a>
        </div>
      </div>
    )
  }

  listingHeader() {
    return (
      <div className="transparent-nav nav-inner flex-box">
        <div className="nav-left">
          <a href="#" className="nav-icon"><i className="material-icons md-light">arrow_back</i></a>
        </div>

        <div className="nav-middle flex-item">
          <div className="middle-text truncate-text"></div>
        </div>

        <div className="nav-right">
          <a href="#" className="nav-icon"><i className="material-icons md-light">favorite_outline</i></a>
          <a href="#" className="nav-icon"><i className="material-icons md-light">share</i></a>
          <a href="#" className="nav-icon"><i className="material-icons md-light">flag</i></a>
        </div>
      </div>
    )
  }

  defaultHeader() {
    return (
      <div className="blue-nav nav-inner flex-box">
        <div className="nav-middle flex-item">
          <div className="middle-text">TIKI</div>
        </div>

        <div className="nav-right">
          <a href="#" className="nav-icon"><i className="material-icons md-light">search</i></a>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="mobile-nav navbar-fixed-top">
        { this.props.categorySlug ? this.categoryHeader() : this.props.listingSlug ? this.listingHeader() : this.defaultHeader() }
      </div>
    )
  }
}