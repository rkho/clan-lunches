var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var Navbar = require('react-bootstrap').Navbar

var Navigation = React.createClass({
  render: function() {
    return(
      <Navbar>
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="app">Clan Lunches</Link>
            <RouteHandler />
          </div>
        </div>
      </Navbar>
    )
  }
})

module.exports = Navigation;
