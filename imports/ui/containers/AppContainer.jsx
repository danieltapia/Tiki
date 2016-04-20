import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import AppLayout from '/imports/ui/layouts/AppLayout.jsx';

export default createContainer(({ params }) => {
  const currentUser = Meteor.user();

  return {
    currentUser
  };
}, AppLayout);