var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var Navbar = require('./components/Navbar');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <div>Hello Thar!</div>
        </div>
      </div>
    )
  }
});

module.exports = App;
