var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <div id="navbar">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link className="btn btn-primary btn-simple" to="app" role="button">Home</Link>
                <RouteHandler />
              </div>
            </div>
          </nav>
        </div>
        <div>
          <div>Hello There!</div>
        </div>
      </div>
    )
  }
});

module.exports = App;
