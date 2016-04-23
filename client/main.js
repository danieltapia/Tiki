import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '/imports/client/routes.jsx';
import bootstrap from 'bootstrap';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});