import React from 'react';
import ListingFeed from '/imports/ui/components/listings/ListingFeed.jsx';

export default class CategoryContainer extends React.Component {
  render() {
    return (
      <div>
        <p>This is the category list page: {this.props.params.categorySlug} in CategoryContainer.jsx.</p>

        <div className="listing-feed">
          <ListingFeed category="all" />
        </div>
      </div>
    )
  }
}