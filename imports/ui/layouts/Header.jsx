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

  chatHeader() {
    return (
      <div className="blue-nav nav-inner flex-box">
        <div className="nav-left">
          <a href="#" className="nav-icon"><i className="material-icons md-light">arrow_back</i></a>
        </div>

        <div className="nav-middle nav-middle-chat flex-item truncate-text">
          <div className="middle-text">
            <div className="flex-box">
              <img src="http://placehold.it/30x30" alt="" className="img-circle avatar"/>
              <div className="flex-item">
                {this.props.chatSlug}
                <div className="last-seen small-text">ver perfil</div>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-right">
          <a href="#" className="nav-icon"><i className="material-icons md-light">more_vert</i></a>
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
        { this.props.categorySlug ? this.categoryHeader() : 
          this.props.listingSlug ? this.listingHeader() : 
          this.props.chatSlug ? this.chatHeader() : 
          this.defaultHeader() }
      </div>
    )
  }
}