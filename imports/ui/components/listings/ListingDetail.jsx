import React from 'react';
import Format from '/imports/helpers/format.js';

export default class ListingDetail extends React.Component {
  render() {
    var self = this;
    return (
      <div>
        <h1>{this.props.listing.name}</h1>
        <p>{this.props.listing.description}</p>
      </div>
    )
  }
}