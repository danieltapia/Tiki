import React from 'react';
import ListingDetail from '/imports/ui/components/listings/ListingDetail.jsx';

export default class ListingContainer extends React.Component {
  render() {
    var listing = {
      name: 'Ford Explorer',
      price: '3000',
      description: 'Nice car for sale',
      created_at: new Date()
    };
    return (
      <div>
        <p>For sale</p>
        <h1>{this.props.params.listingSlug} - id: {this.props.params.id}</h1>

        <div className="listing-feed">
          <ListingDetail listing={listing} />
        </div>
      </div>
    )
  }
}