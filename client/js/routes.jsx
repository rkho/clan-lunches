var React = require('react');
var Router = require ('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('./App');
var EditProfile = require('./components/EditProfile');
var LandingPage = require('./components/LandingPage');
var Registration = require('./components/Registration');

var routes = (
    <Route name="app" path="/" handler={ App }>
      <Route name="edit" handler={ EditProfile } />
      <Route name="register" handler={ Registration } />
      <DefaultRoute handler={ LandingPage }/>
    </Route>
)

module.exports = routes;
