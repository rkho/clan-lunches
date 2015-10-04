var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var Navbar = React.createClass({
  render: function() {
    return(
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="app">Clan Lunches</Link>
            <RouteHandler />
          </div>
        </div>
      </nav>
    )
  }
})

module.exports = Navbar;
