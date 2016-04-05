import React from 'react';
import ListingCard from '/imports/ui/components/listings/ListingCard.jsx'
import faker from 'faker';

export default class ListingFeed extends React.Component {
  render() {
    var listings = [];
    for (var i = 0; i < 9; i++) {
      listings.push({
        name: faker.name.firstName(),
        askingPrice: faker.random.number(),
        created_at: new Date(),
        title: faker.lorem.sentence(),
        description: faker.lorem.sentence()
      });
    }

    return (
      <div>
        {
          listings.map(function (listing, i) {
            return <ListingCard key={i} listing={listing}/>
          })
        }
      </div>
    )
  }
}