var React = require('react');
var Router = require('react-router');

var LandingPage = require('./components/LandingPage');
var Navbar = require('./components/Navbar');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar />
        <LandingPage />
      </div>
    )
  }
});

module.exports = App;
