import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import AppLayout from '/imports/ui/layouts/AppLayout.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppLayout}>
    </Route>
  </Router>
)