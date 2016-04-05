import React from 'react';
import Header from '/imports/ui/layouts/Header.jsx'
import Navigation from '/imports/ui/layouts/Navigation.jsx'
import ListingFeed from '/imports/ui/components/listings/ListingFeed.jsx'

export default class AppLayout extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div className="listing-feed">
          <ListingFeed category="all" />
        </div>

        <Navigation />
      </div>
    )
  }
}