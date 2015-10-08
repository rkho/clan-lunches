var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;

var Navigation = React.createClass({
  render: function() {
    return(
      <Navbar>
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="app">Clan Lunch</Link>
            <Link className="navbar-brand" to="edit">Edit Profile</Link>
            <Link className="navbar-brand" to="register">Create Account</Link>
          </div>
        </div>
      </Navbar>
    )
  }
})

module.exports = Navigation;
