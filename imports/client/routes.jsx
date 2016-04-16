import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import AppLayout from '/imports/ui/layouts/AppLayout.jsx';
import CategoryContainer from '/imports/ui/containers/CategoryContainer.jsx';
import ListingContainer from '/imports/ui/containers/ListingContainer.jsx';
import NewListingContainer from '/imports/ui/containers/NewListingContainer.jsx';
import UserSettingsContainer from '/imports/ui/containers/UserSettingsContainer.jsx';
import ChatContainer from '/imports/ui/containers/ChatContainer.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppLayout}>
      <Route path="chat" component={ChatContainer}/>
      <Route path="new-listing" component={NewListingContainer}/>
      <Route path="settings" component={UserSettingsContainer}/>
      <Route path="category/:categorySlug" component={CategoryContainer}/>
      <Route path="for-sale/:id/:listingSlug" component={ListingContainer}/>
    </Route>
  </Router>
)