import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import AppLayout from '/imports/ui/layouts/AppLayout.jsx';
import CategoryContainer from '/imports/ui/containers/CategoryContainer.jsx';
import ListingContainer from '/imports/ui/containers/ListingContainer.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppLayout}>
      <Route path="category/:categorySlug" component={CategoryContainer}/>
      <Route path="for-sale/:id/:listingSlug" component={ListingContainer}/>
    </Route>
  </Router>
)