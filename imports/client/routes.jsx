import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import AppContainer from '/imports/ui/containers/AppContainer.jsx';
import CategoryContainer from '/imports/ui/containers/CategoryContainer.jsx';
import ListingContainer from '/imports/ui/containers/ListingContainer.jsx';
import NewListingContainer from '/imports/ui/containers/NewListingContainer.jsx';
import UserSettingsContainer from '/imports/ui/containers/UserSettingsContainer.jsx';
import ChatContainer from '/imports/ui/containers/ChatContainer.jsx';
import Login from '/imports/ui/components/login/Login.jsx'

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <Route path="login" component={Login} />
      <Route path="chat/:chatSlug" component={ChatContainer}/>
      <Route path="new-listing" component={NewListingContainer}/>
      <Route path="settings" component={UserSettingsContainer}/>
      <Route path="category/:categorySlug" component={CategoryContainer}/>
      <Route path="for-sale/:id/:listingSlug" component={ListingContainer}/>
    </Route>
  </Router>
) 