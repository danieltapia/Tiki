import { Class } from 'meteor/jagi:astronomy';
import Listings from '/imports/collections/listings.js'

export default Class.create({
  name: 'Listing',
  collection: Listings,
  fields: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    askingPrice: {
      type: Number
    }
  },
  behaviors: {
    timestamp: {
      createdFieldName: 'createdAt'
    }
  }
});