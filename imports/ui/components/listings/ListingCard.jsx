import React from 'react';
import Format from '/imports/helpers/format.js';

export default class ListingCard extends React.Component {
  render() {
    var self = this;
    return (
      <div className="col-md-3 col-sm-4 col-xs-6 grid-item">
        <div className="card">
          <div className="card-thumbnail">
            <img className="img-responsive" src="http://placehold.it/640x480" alt=""/>
            <div className="price">{Format.money(self.props.listing.askingPrice)}</div>
          </div>
        </div>
      </div>
    )
  }
}