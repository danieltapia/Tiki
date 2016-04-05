import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import AppLayout from '/imports/ui/layouts/AppLayout.jsx';
import CategoryContainer from '/imports/ui/containers/CategoryContainer.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppLayout}>
      <Route path="category/:categorySlug" component={CategoryContainer}/>
    </Route>
  </Router>
)