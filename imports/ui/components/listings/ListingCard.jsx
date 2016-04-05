import React from 'react';
import Format from '/imports/helpers/format.js';

export default class ListingCard extends React.Component {
  render() {
    var self = this;
    return (
      <div className="card">
        <div className="card-seller">
          <div className="media">
            <div className="media-left">
              <a href="#">
                <img className="media-object img-circle" src="http://placehold.it/32x32" alt="..." />
              </a>
            </div>
            <div className="media-body">
              <div className="row">
                <div className="col-xs-6">
                  <a href="#" className="username">{this.props.listing.name}</a>
                </div>

                <div className="col-xs-6 text-right">
                  <div className="timestamp small-text subtle-text">{Format.dateFromNow(self.props.listing.created_at.toString())}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-thumbnail">
          <img src="http://placehold.it/680x460" alt="" className="img-responsive"/>
          <div className="price">{Format.money(self.props.listing.askingPrice)}</div>
        </div>

        <div className="card-content">
          <a href="#" className="title">{this.props.listing.title}</a>
          <div className="city">{this.props.listing.description}</div>
        </div>
      </div>
    )
  }
}