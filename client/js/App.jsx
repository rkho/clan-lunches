var React = require('react');
var Router = require('react-router');

var LandingPage = require('./components/LandingPage');
var Navigation = require('./components/Navigation');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Navigation />
        <LandingPage />
      </div>
    )
  }
});

module.exports = App;
