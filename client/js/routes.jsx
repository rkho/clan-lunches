import React from 'react';
import { Router, Route, DefaultRoute } from 'react-router';

import App from './App';
import EditProfile from './components/EditProfile';
import LandingPage from './components/LandingPage';
import Registration from './components/Registration';

var routes = (
    <Route name="app" path="/" handler={ App }>
      <Route name="edit" handler={ EditProfile } />
      <Route name="register" handler={ Registration } />
      <DefaultRoute handler={ LandingPage }/>
    </Route>
)

export default routes;
