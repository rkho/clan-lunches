var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Navigation = require('./components/Navigation');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Navigation />
        <RouteHandler />
      </div>
    )
  }
});

module.exports = App;
